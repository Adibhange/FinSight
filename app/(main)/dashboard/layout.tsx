import { Suspense } from "react";
import DashboardPage from "./page";
import Loader from "@/components/global/Loader";

const DashboardLayout = () => {
  return (
    <div className="px-5">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="gradient-title text-6xl font-bold tracking-tight">
          Dashboard
        </h1>
      </div>
      <Suspense fallback={<Loader />}>
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
