export interface TestimonialInterface {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export const testimonialsData: TestimonialInterface[] = [
  {
    name: "Alex Mercer",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "FinSight has completely changed how I manage my finances. The AI recommendations helped me save an extra $400 each month that I didn't even realize I was wasting!",
  },
  {
    name: "Jamie Lee",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    quote:
      "As someone who loves data, I appreciate how FinSight presents my financial information in a clear, actionable way. The predictive analytics are surprisingly accurate!",
  },
  {
    name: "Jordan Smith",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "FinSight doesn't just track my personal finances—it's helped me manage my small business expenses too. The insights have been invaluable for budgeting and forecasting.",
  },
];
