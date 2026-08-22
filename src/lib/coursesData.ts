export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
  duration: string;
  features: string[];
}

export const courses: Course[] = [
  {
    id: "upsc-cse",
    title: "UPSC CSE Foundation",
    description: "Complete preparation for IAS/IPS/IFS and all Group A services. Prelims + Mains + Interview guidance.",
    icon: "🏛️",
    badge: "Most Popular",
    duration: "1 Year / 2 Year Batches",
    features: ["Daily classes", "Test series", "Mentorship"],
  },
  {
    id: "up-pcs",
    title: "UP PCS Complete Course",
    description: "Dedicated preparation for UP State Civil Services — Prelims, Mains, and Interview with UP-specific focus.",
    icon: "⚖️",
    badge: "New Batch",
    duration: "6 Month / 1 Year",
    features: ["UP Special focus", "Mains answer writing", "Mock interviews"],
  },
  {
    id: "library",
    title: "Self-Study Library",
    description: "Curated UPSC/PCS library with reference books, newspapers, current affairs material. Opens 7 AM daily.",
    icon: "📚",
    badge: "Open Access",
    duration: "Monthly / Quarterly / Annual",
    features: ["Quiet environment", "High-speed Wi-Fi", "Current affairs section"],
  },
  {
    id: "current-affairs",
    title: "Current Affairs Program",
    description: "Daily news analysis, monthly magazine, weekly tests — all aligned to UPSC exam pattern.",
    icon: "📰",
    badge: "Daily",
    duration: "Ongoing",
    features: ["The Hindu analysis", "Monthly roundup", "Prelims MCQ practice"],
  },
];
