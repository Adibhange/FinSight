import { getAccountsDetails } from "@/actions/accounts";
import Loader from "@/components/global/Loader";
import { Suspense } from "react";
import AccountChart from "../_components/AccountChart";
import { notFound } from "next/navigation";
import TransactionTable from "../_components/TransactionTable";

type Props = {
  params: Promise<{ accountId: string }>;
};

const AccountDetailsPage = async ({ params }: Props) => {
  const { accountId } = await params;

  const accountData = await getAccountsDetails(accountId);

  if (!accountData?.success || !accountData.data) {
    notFound();
  }
  let { transactions } = accountData.data;

  const { account } = accountData.data;

  return (
    <div className="space-y-8 px-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="gradient-title text-5xl font-bold tracking-tight capitalize sm:text-6xl">
            {account.name}
          </h1>
          <p className="text-muted-foreground">
            {account.type.charAt(0) + account.type.slice(1).toLowerCase()}{" "}
            Account
          </p>
        </div>

        <div className="pb-2 text-right">
          <div className="text-xl font-bold sm:text-2xl">
            ${parseFloat(account.balance).toFixed(2)}
          </div>
          <p className="text-muted-foreground text-sm">
            {account._count.transactions} Transactions
          </p>
        </div>
      </div>

      <Suspense fallback={<Loader />}>
        <AccountChart transactions={transactions} />

        <TransactionTable transactions={transactions} />
      </Suspense>
    </div>
  );
};

export default AccountDetailsPage;
