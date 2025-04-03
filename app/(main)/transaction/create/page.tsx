import { getUserAccounts } from "@/actions/dashboard";
import TransactionForm from "../_components/TransactionForm";
import { defaultCategories } from "@/data/categoryColors";
import { Account } from "@prisma/client";
import { getTransaction, TransactionInterface } from "@/actions/transaction";

type Props = {
  searchParams: Promise<{ edit?: string }>;
};

const CreateTransactionPage = async ({ searchParams }: Props) => {
  const accounts = await getUserAccounts();
  const accountData = accounts?.data as Account[];

  const { edit: editId } = await searchParams;
  let initialData = null;
  if (editId) {
    const transaction = await getTransaction(editId);
    initialData = transaction;
  }

  return (
    <div className="mx-auto max-w-3xl px-5">
      <div className="mb-8 flex justify-center md:justify-normal">
        <h1 className="gradient-title text-5xl">
          {editId ? "Update" : "Create"} Transaction
        </h1>
      </div>
      <TransactionForm
        accounts={accountData}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData as TransactionInterface}
      />
    </div>
  );
};

export default CreateTransactionPage;
