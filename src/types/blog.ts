export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  image?: string;
}

export interface CategoryInfo {
  name: string;
  icon: string;
  color: string;
}

export interface BlogManifest {
  posts: BlogPostMeta[];
  categories: Record<string, CategoryInfo>;
}
