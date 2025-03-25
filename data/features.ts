import {
  BarChart3Icon,
  GlobeIcon,
  LucideIcon,
  PieChartIcon,
  ReceiptIcon,
  Wallet2Icon,
  ZapIcon,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const featuresData: Feature[] = [
  {
    icon: BarChart3Icon,
    title: "AI-Powered Insights",
    description:
      "Get personalized financial recommendations based on your spending habits.",
  },
  {
    icon: ReceiptIcon,
    title: "Smart Receipt Scanner",
    description:
      "Extract data automatically from receipts using advanced AI technology.",
  },
  {
    icon: PieChartIcon,
    title: "Smart Budgeting Planning",
    description:
      "Create personalized budgets based on your spending patterns and financial goals.",
  },
  {
    icon: Wallet2Icon,
    title: "Expense Tracking",
    description:
      "Automatically categorize and track your expenses across all your accounts.",
  },
  {
    icon: GlobeIcon,
    title: "Multi-Currency",
    description: "Support for multiple currencies with real-time conversion.",
  },
  {
    icon: ZapIcon,
    title: "Automated Insights",
    description: "Get automated financial insights and recommendations.",
  },
];
