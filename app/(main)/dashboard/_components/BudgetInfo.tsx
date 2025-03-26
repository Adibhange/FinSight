"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { CheckIcon, PencilIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {};

const BudgetInfo = (props: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex-1">
          <CardTitle className="text-sm font-medium">
            Monthly Budget (Default Account)
          </CardTitle>
          <div className="mt-1 flex items-center gap-2">
            {isEditing ? (
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  className="w-32"
                  placeholder="Enter amount"
                  autoFocus
                />
                <Button variant="ghost" size="icon">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                </Button>
                <Button variant="ghost" size="icon">
                  <XIcon className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ) : (
              <>
                <CardDescription>2000/3500</CardDescription>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsEditing(true)}
                  className="h-6 w-6"
                >
                  <PencilIcon className="h-3 w-3" />
                </Button>
              </>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Progress value={80} />
          <p className="text-muted-foreground text-right text-xs">80% used</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetInfo;
