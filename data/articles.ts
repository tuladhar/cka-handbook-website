export interface Article {
  title: string
  /** Full article URL (e.g. LinkedIn). Leave empty for a placeholder. */
  url: string
  /** Display date, e.g. "May 27, 2025". */
  date: string
  /** Image in public/images/articles/, e.g. "/images/articles/etcd-backup.png". Optional. */
  thumbnail?: string
}

// Newest first.
export const articles: Article[] = [
  {
    title: "Mini CKA mock exams: bite-sized practice on real clusters",
    url: "https://www.linkedin.com/posts/ptuladhar3_kubernetes-cka-devops-activity-7486315857342734336-ADPs",
    date: "July 24, 2026",
    thumbnail: "/images/articles/mini-cka-mock-exam.jpg",
  },
  {
    title: "A first-timer's beginner guide to scheduling your CKA certification exam",
    url: "https://www.linkedin.com/pulse/first-timers-beginner-guide-scheduling-your-cka-exam-puru-tuladhar-xi91c",
    date: "May 22, 2026",
    thumbnail: "/images/articles/cka-exam-scheduling-guide.jpg",
  },
]
