import { ReactNode } from "react";

export interface HeaderProps {
  children: String;
  subText: String;
}

export interface HeaderProps {
  children: String;
  subText: String;
}

export interface TagProps {
  children: string;
  url?: string | null;
}

export interface SideMarginProps {
	children: ReactNode
}

export interface ArticleCardProps {
  imgUrl: string;
  alt: string;
  date: string;
  children: string;
  tags: TagProps[];
}

export interface TopBannerProps {
  sectionName?: string;
  articleInfo: ArticleCardProps;
}