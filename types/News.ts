// import { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';

// export interface News extends MarkdownParsedContent {
//   id: number;
//   slug: string;
//   title: string;
//   lead: string;
//   mainImage: string;
//   publishedAt: string;
// }

export interface News {
  id: number;
  slug: string;
  title: string;
  lead: string;
  image: string;
  locale: string;
  created_at: string;
  published_at: string;
  is_active: boolean;
}
