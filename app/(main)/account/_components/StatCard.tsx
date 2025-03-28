import { Card, CardContent } from "@/components/ui/card";

type StatCardProps = {
  title: string;
  amount: number;
  icon: React.ComponentType<{ size: number }>;
  color: "green" | "red";
};

const StatCard = ({ title, amount, icon: Icon, color }: StatCardProps) => (
  <Card className="mb-6 w-full">
    <CardContent className="flex items-center gap-2">
      <div className={`rounded-md bg-${color}-100 p-2 text-${color}-500`}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-muted-foreground">{title}</p>
        <p className={`text-lg font-bold text-${color}-500`}>
          ${amount.toFixed(2)}
        </p>
      </div>
    </CardContent>
  </Card>
);

export default StatCard;
