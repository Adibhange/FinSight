"use server";

import { serializeTransaction } from "@/app/lib/serializeTransactions";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { AccountType, Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

type createAccountProps = {
  name: string;
  type: AccountType;
  balance: string;
  isDefault: boolean;
};

export const createAccount = async (data: createAccountProps) => {
  try {
    const { userId } = await auth();

    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    const balanceFloat = parseFloat(data.balance.toString());
    if (isNaN(balanceFloat)) {
      throw new Error("Invalid balance amount");
    }
    const balanceDecimal = new Prisma.Decimal(balanceFloat);

    const existingAccounts = await db.account.findMany({
      where: { userId: user.id },
    });

    const shouldBeDefault =
      existingAccounts.length === 0 ? true : data.isDefault;

    if (shouldBeDefault) {
      await db.account.updateMany({
        where: { userId: user.id, isDefault: true },
        data: { isDefault: false },
      });
    }

    // Create new account
    const account = await db.account.create({
      data: {
        ...data,
        balance: balanceDecimal,
        userId: user.id,
        isDefault: shouldBeDefault,
      },
    });

    const serializedAccount = serializeTransaction(account);

    revalidatePath("/dashboard");
    return { success: true, data: serializedAccount };
  } catch (error) {
    console.error("Error creating account:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
};

export const getUserAccounts = async () => {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const accounts = await db.account.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: {
            transactions: true,
          },
        },
      },
    });

    // Serialize accounts before sending to client
    const serializedAccounts = accounts.map(serializeTransaction);

    return { success: true, data: serializedAccounts };
  } catch (error) {
    console.error("Error getting user account:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
};
