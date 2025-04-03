import { getCurrentBudget } from "@/actions/budget";
import { getDashboardData, getUserAccounts } from "@/actions/dashboard";
import { TransactionInterface } from "@/actions/transaction";
import CreateAccount from "@/components/global/CreateAccount";
import { Card, CardContent } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import AccountCard from "./_components/AccountCard";
import BudgetInfo from "./_components/BudgetInfo";
import DashboardSummary from "./_components/DashboardSummary";

export type Account = {
  id: string;
  name: string;
  type: string;
  balance: string;
  isDefault: boolean;
};

const DashboardPage = async () => {
  const accountsData = await getUserAccounts();
  const transactions = await getDashboardData();

  const accounts: Account[] =
    accountsData.success && accountsData.data
      ? accountsData.data.map((account) => ({
          id: account.id,
          name: account.name,
          type: account.type,
          balance: account.balance,
          isDefault: account.isDefault,
        }))
      : [];

  const defaultAccount = accounts?.find((account) => account.isDefault);

  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  return (
    <div className="space-y-8">
      {budgetData && (
        <BudgetInfo
          initialBudget={budgetData?.budget}
          currentExpenses={budgetData?.currentExpenses || 0}
        />
      )}

      <DashboardSummary
        accounts={accounts}
        transactions={(transactions as TransactionInterface[]) || []}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CreateAccount>
          <Card className="cursor-pointer border-dashed transition-shadow hover:shadow-md">
            <CardContent className="text-muted-foreground flex h-full flex-col items-center justify-center pt-5">
              <PlusIcon className="mb-2 h-10 w-10" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccount>

        {accounts?.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
