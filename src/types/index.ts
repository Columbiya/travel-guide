export type EntityId = string | number;

export interface IRoute {
  id: EntityId;
  name: string;
  picture: string;
  duration: string;
}

export interface ISection {
  sectionId: EntityId;
  sectionName: string;
  sectionCode: string;
  icon: string;
  routs?: IRoute[];
}

export interface SEO {
  title: string;
  keywords: string;
  description: string;
}

export const enum Constants {
  BASE_URL = "https://travel-guide-ufa.wptt.ru/api",
  IMAGE_URL = "https://travel-guide-ufa.wptt.ru",
}

export * from "./fetch";
