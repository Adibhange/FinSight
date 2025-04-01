import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "finsight",
  name: "FinSight",
  retryFunction: async (attempt: number) => ({
    delay: Math.pow(2, attempt) * 1000,
    maxAttempts: 2,
  }),
});
