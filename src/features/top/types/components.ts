import { TagProps } from "@/features/common/types/components";

export interface ArticleCardProps {
  imgUrl: string;
  alt: string;
  date: string;
  children: string;
  tags: TagProps[];
}