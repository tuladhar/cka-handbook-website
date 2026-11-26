export interface Article {
  title: string
  /** Full article URL (e.g. LinkedIn). Leave empty for a placeholder. */
  url: string
  /** Display date, e.g. "May 27, 2025". */
  date: string
  /** Image in public/images/articles/, e.g. "/images/articles/etcd-backup.png". Optional. */
  thumbnail?: string
}

// TODO: replace these placeholders with real articles before merging.
export const articles: Article[] = [
  { title: "Article title coming soon", url: "", date: "" },
  { title: "Article title coming soon", url: "", date: "" },
  { title: "Article title coming soon", url: "", date: "" },
]
