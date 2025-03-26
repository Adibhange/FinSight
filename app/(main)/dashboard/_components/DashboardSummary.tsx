"use client";

import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ArrowDownRightIcon, ArrowUpRightIcon } from "lucide-react";
import { PieChartComponent } from "@/components/global/Chart";

type Props = {};

const recentTransactions = [
  {
    id: 1,
    description: "",
    date: 20251302,
    type: "",
    amount: 12,
  },
  {
    id: 2,
    description: "",
    date: 20451215,
    type: "EXPENSE",
    amount: 12,
  },
];

const pieChartData = [
  {
    name: "Netflix",
    value: 10,
  },
  {
    name: "Amazon",
    value: 15,
  },
  {
    name: "Shopping",
    value: 150,
  },
  {
    name: "Movie",
    value: 45,
  },
];

const DashboardSummary = (props: Props) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-base font-normal">
            Recent Transactions
          </CardTitle>
          <Select>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select account" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="personal">Personal</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.length === 0 ? (
              <p className="text-muted-foreground py-4 text-center">
                No recent transactions
              </p>
            ) : (
              recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <p className="text-sm leading-none font-medium">
                      {transaction.description || "Untitled Transaction"}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {format(new Date(transaction.date), "PP")}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "flex items-center",
                        transaction.type === "EXPENSE"
                          ? "text-red-500"
                          : "text-green-500",
                      )}
                    >
                      {transaction.type === "EXPENSE" ? (
                        <ArrowDownRightIcon className="mr-1 h-4 w-4" />
                      ) : (
                        <ArrowUpRightIcon className="mr-1 h-4 w-4" />
                      )}
                      ${transaction.amount.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-normal">
            Monthly Expense Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 pb-5">
          <PieChartComponent data={pieChartData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardSummary;
