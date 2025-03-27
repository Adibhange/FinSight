import { Prisma } from "@prisma/client";

type PrismaModel = Record<string, any>;

export const serializeTransaction = (obj: PrismaModel): PrismaModel => {
  if (!obj) return obj;

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      value instanceof Prisma.Decimal ? value.toNumber() : value,
    ]),
  );
};
