import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { CSSProperties } from "react";

interface BudgetAlertData {
  percentageUsed: number;
  budgetAmount: number;
  totalExpenses: number;
  accountName: string;
}

interface MonthlyReportData {
  month: string;
  stats: {
    totalIncome: number;
    totalExpenses: number;
    byCategory: Record<string, number>;
  };
  insights: string[];
}

interface EmailTemplateProps {
  userName: string;
  type: "budget-alert" | "monthly-report";
  data: BudgetAlertData | MonthlyReportData;
}

const EmailTemplate = ({
  userName = "",
  type = "budget-alert",
  data,
}: EmailTemplateProps) => {
  if (type === "monthly-report") {
    const reportData = data as MonthlyReportData;
    return (
      <Html>
        <Head />
        <Preview>Your Monthly Financial Report</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading style={styles.title}>Monthly Financial Report</Heading>

            <Text style={styles.text}>Hello {userName},</Text>
            <Text style={styles.text}>
              Here&rsquo;s your financial summary for {reportData.month}:
            </Text>

            {/* Main Stats */}
            <Section style={styles.statsContainer}>
              <div style={styles.stat}>
                <Text style={styles.text}>Total Income</Text>
                <Text style={styles.heading}>
                  ${reportData.stats.totalIncome}
                </Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.text}>Total Expenses</Text>
                <Text style={styles.heading}>
                  ${reportData.stats.totalExpenses}
                </Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.text}>Net</Text>
                <Text style={styles.heading}>
                  $
                  {reportData.stats.totalIncome -
                    reportData.stats.totalExpenses}
                </Text>
              </div>
            </Section>

            {reportData?.stats?.byCategory && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>Expenses by Category</Heading>
                {Object.entries(reportData?.stats.byCategory).map(
                  ([category, amount]) => (
                    <div key={category} style={styles.row}>
                      <Text style={styles.text}>{category}</Text>
                      <Text style={styles.text}>${amount}</Text>
                    </div>
                  ),
                )}
              </Section>
            )}

            {/* AI Insights */}
            {reportData?.insights && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>FinSight Insights</Heading>
                {reportData.insights.map((insight, index) => (
                  <Text key={index} style={styles.text}>
                    • {insight}
                  </Text>
                ))}
              </Section>
            )}

            <Text style={styles.footer}>
              Thank you for using FinSight. Keep tracking your finances for
              better financial health!
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }

  if (type === "budget-alert") {
    const budgetData = data as BudgetAlertData;
    return (
      <Html>
        <Head />
        <Preview>Budget Alert</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading style={styles.title}>Budget Alert</Heading>
            <Text style={styles.text}>Hello {userName},</Text>
            <Text style={styles.text}>
              You&rsquo;ve used {budgetData.percentageUsed.toFixed(1)}% of your
              monthly budget.
            </Text>
            <Section style={styles.statsContainer}>
              <div style={styles.stat}>
                <Text style={styles.text}>Budget Amount</Text>
                <Text style={styles.heading}>${budgetData.budgetAmount}</Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.text}>Spent So Far</Text>
                <Text style={styles.heading}>${budgetData.totalExpenses}</Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.text}>Remaining</Text>
                <Text style={styles.heading}>
                  ${budgetData.budgetAmount - budgetData.totalExpenses}
                </Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  }

  return null;
};

export default EmailTemplate;

const styles: { [key: string]: CSSProperties } = {
  body: {
    backgroundColor: "#f4f7fb",
    fontFamily: "'Inter', sans-serif",
    color: "#333",
    padding: "20px",
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "24px",
    borderRadius: "6px",
    border: "1px solid #e2e8f0",
    maxWidth: "600px",
  },
  title: {
    color: "#1a202c",
    fontSize: "26px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "20px",
  },
  heading: {
    color: "#1a202c",
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "12px",
  },
  text: {
    color: "#4a5568",
    fontSize: "16px",
    lineHeight: "1.5",
    marginBottom: "16px",
    textTransform : "capitalize"
  },
  section: {
    marginTop: "24px",
    padding: "20px",
    backgroundColor: "#f7fafc",
    borderRadius: "6px",
    border: "1px solid #e2e8f0",
  },
  statsContainer: {
    margin: "24px 0",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "6px",
    border: "1px solid #e2e8f0",
  },
  stat: {
    marginBottom: "12px",
    padding: "14px",
    backgroundColor: "#f9fafb",
    borderRadius: "4px",
    border: "1px solid #e2e8f0",
  },
  row: {
    display: "table",
    width: "100%",
    padding: "10px 0",
    borderBottom: "1px solid #e2e8f0",
  },
  footer: {
    color: "#718096",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "24px",
    paddingTop: "14px",
    borderTop: "1px solid #e2e8f0",
  },
};
