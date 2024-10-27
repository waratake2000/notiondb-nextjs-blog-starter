import { TagProps } from "@/features/common/types/components";

export interface TopBannerProps {
  imgUrl: string;
  alt: string;
  date: string;
  children: string;
  tags: TagProps[];
}