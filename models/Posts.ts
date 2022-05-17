export default interface Post {
  metadata: any;
  content: string;
}

export interface CategoryPosts {
  category: string;
  posts: Post[];
}
