import { EntityId, ISection, SEO } from "..";

export interface GetListMainResponse {
  data: ISection[];
  sectionName: string;
  sectionCode: string;
  pictureDesktop: string;
  pictureMob: string;
  seo: SEO;
}

export interface IEvent {
  id: number;
  name: string;
  picture: string;
  address: string;
  dateEvent: string;
  ageLimit: string;
  sectionId: EntityId;
  sectionName: string;
  sectionCode: string;
}

export interface MainSliderItem {
  id: EntityId;
  pictureMob: string;
  pictureDesktop: string;
  description: string;
  btnText: string;
  btnLink: string;
  name: string;
}

export type MainSliderResponse = {
  data: MainSliderItem[];
  seo: SEO;
};

export type GetCompilationsListCultureResponse = MainSections[];

type MainSections = {
  id: EntityId;
  name: string;
  sectionCode: string;
  picture: string;
};

export type GetCompilationsResponse = MainSections[];

export type GetMainEventsResponse = IEvent[];
