import CreateAccount from "@/components/global/CreateAccount";
import { Card, CardContent } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import AccountCard from "./_components/AccountCard";
import BudgetInfo from "./_components/BudgetInfo";
import DashboardSummary from "./_components/DashboardSummary";

type Props = {};

const accounts = [
  {
    id: 1,
    name: "Addd",
    type: "CURRENT",
    balance: "124",
    isDefault: true,
  },
  {
    id: 2,
    name: "Addd",
    type: "CURRENT",
    balance: "124",
    isDefault: false,
  },
];

const DashboardPage = (props: Props) => {
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

        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
