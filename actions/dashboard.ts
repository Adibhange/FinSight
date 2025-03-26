"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { AccountType, Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

type PrismaModel = Record<string, any>;

const serializeTransaction = (obj: PrismaModel): PrismaModel => {
  if (!obj) return obj;

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      value instanceof Prisma.Decimal ? value.toNumber() : value,
    ]),
  );
};

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
