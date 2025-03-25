import {
  BarChart3,
  LucideIcon,
  SmartphoneIcon,
  SparklesIcon,
} from "lucide-react";

export interface HowItWorksInterface {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const howItWorksData: HowItWorksInterface[] = [
  {
    icon: SmartphoneIcon,
    title: "Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process. Enjoy a quick registration, easy onboarding, and robust security to keep your information safe.",
  },
  {
    icon: BarChart3,
    title: "Analyze Your Spending",
    description:
      "Our AI automatically categorizes your transactions and identifies patterns to help you understand where your money goes.",
  },
  {
    icon: SparklesIcon,
    title: "Get Personalized Insights",
    description:
      " Receive tailored recommendations to optimize your budget, reduce expenses, and achieve your financial goals faster.",
  },
];
