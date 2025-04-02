import { getUserAccounts } from "@/actions/dashboard";
import TransactionForm from "../_components/TransactionForm";
import { defaultCategories } from "@/data/categoryColors";
import { Account } from "@prisma/client";

type Props = {};

const CreateTransactionPage = async (props: Props) => {
  const accounts = await getUserAccounts();

  const accountData = accounts?.data as unknown as Account[];

  return (
    <div className="mx-auto max-w-3xl px-5">
      <div className="mb-8 flex justify-center md:justify-normal">
        <h1 className="gradient-title text-5xl">Create Transaction</h1>
      </div>
      <TransactionForm accounts={accountData} categories={defaultCategories} />
    </div>
  );
};

export default CreateTransactionPage;
