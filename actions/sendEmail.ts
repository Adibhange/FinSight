"use server";

import { Resend } from "resend";

interface EmailParams {
  to: string;
  subject: string;
  react: React.ReactNode;
}

export const sendEmail = async ({ to, subject, react }: EmailParams) => {
  const resend = new Resend(process.env.RESEND_API_KEY || "");

  try {
    const data = await resend.emails.send({
      from: "FinSight <onboarding@resend.dev>",
      to,
      subject,
      react,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
};
