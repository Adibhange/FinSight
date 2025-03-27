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
import { Account } from "../page";
import useFetch from "@/hooks/use-fetch";
import { updateDefaultAccount } from "@/actions/accounts";
import { toast } from "sonner";
import { useEffect } from "react";

type Props = {
  account: Account;
};

const AccountCard = ({ account }: Props) => {
  const {
    loading: updateDefaultLoading,
    fn: updateDefaultFn,
    data: updatedAccount,
    error,
  } = useFetch(updateDefaultAccount);

  interface HandleDefaultChangeEvent
    extends React.MouseEvent<HTMLButtonElement> {
    preventDefault: () => void;
  }

  const handleDefaultChange = async (
    e: HandleDefaultChangeEvent,
  ): Promise<void> => {
    e.preventDefault();

    if (account.isDefault) {
      toast.warning("You need atleast 1 default account");
      return;
    }

    await updateDefaultFn(account.id);
  };

  useEffect(() => {
    if (updatedAccount?.success) {
      toast.success("Default account updated successfully");
    }
  }, [updatedAccount]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to update default account");
    }
  }, [error]);

  return (
    <Card className="group relative transition-shadow hover:shadow-md">
      <Link href={`/account/${account.id}`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium capitalize">
            {account.name}
          </CardTitle>
          <Switch
            checked={account.isDefault}
            onClick={handleDefaultChange}
            disabled={!!updateDefaultLoading}
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
