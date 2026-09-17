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
    id: "spoken-english",
    title: "Spoken English",
    description: "Master everyday English conversation with fluent speaking, correct pronunciation, and real-life practice sessions.",
    icon: "🗣️",
    badge: "Most Popular",
    duration: "3 Months",
    features: ["Daily practice", "Pronunciation focus", "Fluency building"],
  },
  {
    id: "ielts",
    title: "IELTS Preparation",
    description: "Complete IELTS coaching covering Listening, Reading, Writing & Speaking modules with expert strategies and mock tests.",
    icon: "📝",
    badge: "New Batch",
    duration: "2-3 Months",
    features: ["Mock tests", "Band 7+ strategy", "Personalized feedback"],
  },
  {
    id: "basic-english",
    title: "Basic English",
    description: "Start your English learning journey from scratch. Build strong foundation in grammar, vocabulary, and basic communication.",
    icon: "📖",
    badge: "Beginners Welcome",
    duration: "3 Months",
    features: ["Grammar basics", "Vocabulary building", "Sentence formation"],
  },
  {
    id: "advanced-english",
    title: "Advanced English & Grammar",
    description: "Take your English to the next level with advanced grammar, business English, essay writing and professional communication.",
    icon: "🎯",
    badge: "High Demand",
    duration: "3-6 Months",
    features: ["Advanced grammar", "Business English", "Public speaking"],
  },
];
