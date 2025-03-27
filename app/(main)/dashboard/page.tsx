import CreateAccount from "@/components/global/CreateAccount";
import { Card, CardContent } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import AccountCard from "./_components/AccountCard";
import BudgetInfo from "./_components/BudgetInfo";
import DashboardSummary from "./_components/DashboardSummary";
import { getUserAccounts } from "@/actions/dashboard";

export type Account = {
  id: string;
  name: string;
  type: string;
  balance: string;
  isDefault: boolean;
};

const DashboardPage = async () => {
  const accountsData = await getUserAccounts();

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

  return (
    <div className="space-y-8">
      <BudgetInfo />

      <DashboardSummary />

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
