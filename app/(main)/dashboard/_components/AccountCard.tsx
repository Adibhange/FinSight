"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowDownRightIcon, ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

interface Account {
  id: number;
  name: string;
  type: string;
  balance: string;
  isDefault: boolean;
}

type Props = {
  account: Account;
};

const AccountCard = ({ account }: Props) => {
  return (
    <Card className="group relative transition-shadow hover:shadow-md">
      <Link href={`/account/${account.id}`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium capitalize">
            {account.name}
          </CardTitle>
          <Switch
            checked={account.isDefault}
            // onClick={handleDefaultChange}
            // disabled={updateDefaultLoading}
          />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${parseFloat(account.balance).toFixed(2)}
          </div>
          <p className="text-muted-foreground text-xs">
            {account.type.charAt(0) + account.type.slice(1).toLowerCase()}{" "}
            Account
          </p>
        </CardContent>
        <CardFooter className="text-muted-foreground flex justify-between text-sm">
          <div className="flex items-center">
            <ArrowUpRightIcon className="mr-1 size-4 text-green-500" />
            Income
          </div>
          <div className="flex items-center">
            <ArrowDownRightIcon className="mr-1 size-4 text-red-500" />
            Expense
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default AccountCard;
