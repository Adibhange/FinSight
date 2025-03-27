"use server";

import { serializeTransaction } from "@/app/lib/serializeTransactions";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const updateDefaultAccount = async (accountId: string) => {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // First, unset any existing default account
    await db.account.updateMany({
      where: {
        userId: user.id,
        isDefault: true,
      },
      data: { isDefault: false },
    });

    // Then set the new default account
    const account = await db.account.update({
      where: {
        id: accountId,
        userId: user.id,
      },
      data: { isDefault: true },
    });

    const serializedAccount = serializeTransaction(account);

    revalidatePath("/dashboard");
    return { success: true, data: serializedAccount };
  } catch (error) {
    console.error("Error while updating default account:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
};
