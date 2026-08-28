export interface Review {
  id: string;
  name: string;
  text: string;
  stars: number;
  time: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Aditya Jaiswal",
    text: "Sir's teaching style is very inspiring. Thanks to him, I have gained confidence in this subject. Thank you so much, sir.",
    stars: 5,
    time: "6 months ago",
  },
  {
    id: "2",
    name: "Shikha Pal",
    text: "Provides positive and supportive learning environment. Complex topics are described in easy and simple language with examples related to daily life.",
    stars: 5,
    time: "6 months ago",
  },
  {
    id: "3",
    name: "Rahul Kumar",
    text: "Library is good for studies. Classes are very good and staff behaviour is better than other coaching institutes in Fatehpur.",
    stars: 5,
    time: "2 years ago",
  },
  {
    id: "4",
    name: "Google Reviewer",
    text: "If there is a true study environment in Fatehpur, you will only find it at Rama Coaching Center.",
    stars: 5,
    time: "Recent",
  },
  {
    id: "5",
    name: "Google Reviewer",
    text: "Best facility provided by staff. Good place for serious study.",
    stars: 4,
    time: "Recent",
  },
];
