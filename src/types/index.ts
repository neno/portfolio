import { Asset, Entry } from 'contentful';
import * as Contentful from './contentful';

export type ContentTypeId =
  | Contentful.TypeClientSkeleton['contentTypeId']
  | Contentful.TypeCollectionSkeleton['contentTypeId']
  | Contentful.TypeExperienceSkeleton['contentTypeId']
  | Contentful.TypeLinkSkeleton['contentTypeId']
  | Contentful.TypePersonSkeleton['contentTypeId']
  | Contentful.TypeRichTextSkeleton['contentTypeId']
  | Contentful.TypeSectionSkeleton['contentTypeId']
  | Contentful.TypeTagsSkeleton['contentTypeId']


export type ClientEntry = Entry<Contentful.TypeClientSkeleton, undefined, string>;
export type CollectionEntry = Entry<Contentful.TypeCollectionSkeleton, undefined, string>;
export type ExperienceEntry = Entry<Contentful.TypeExperienceSkeleton, undefined, string>;
export type LinkEntry = Entry<Contentful.TypeLinkSkeleton, undefined, string>;
export type PersonEntry = Entry<Contentful.TypePersonSkeleton, undefined, string>;
export type RichTextEntry = Entry<Contentful.TypeRichTextSkeleton, undefined, string>;
export type SectionEntry = Entry<Contentful.TypeSectionSkeleton, undefined, string>;
export type TagsEntry = Entry<Contentful.TypeTagsSkeleton, undefined, string>;


export type ContentfulSectionContentEntry = LinkEntry | PersonEntry | SectionEntry | RichTextEntry | CollectionEntry | ExperienceEntry | TagsEntry;

type MetaFields = {
  _id: string;
};

export type Client = Contentful.TypeClientFields & MetaFields;

export type Collection = Omit<Contentful.TypeCollectionFields, 'items'> & MetaFields & {
  items: Array<PortfolioLink>;
};

export type Experience = Omit<Contentful.TypeExperienceFields, 'client' | 'thumbnail'> & MetaFields & {
  client: Client | undefined;
  thumbnail?: Asset | undefined;
};

export type Link = Contentful.TypeLinkFields & MetaFields;

export type Person = Contentful.TypePersonFields & MetaFields;

export type Project = Contentful.TypeExperienceFields & MetaFields & {
  isAProject: true
};

export type RichText = Contentful.TypeRichTextFields & MetaFields

export type Section = Omit<Contentful.TypeSectionFields, 'contents'> & MetaFields & {
  contents?: PortfolioContent[];
};

export type Tags = Contentful.TypeTagsFields & MetaFields;

export type PortfolioClient = {
  contentTypeId: Contentful.TypeClientSkeleton['contentTypeId'];
  content: Client;
}

export type PortfolioCollection = {
  contentTypeId: Contentful.TypeCollectionSkeleton['contentTypeId'];
  content: Collection;
}

export type PortfolioExperience = {
  contentTypeId: Contentful.TypeExperienceSkeleton['contentTypeId'];
  content: Experience;
}

export type PortfolioLink = {
  contentTypeId: Contentful.TypeLinkSkeleton['contentTypeId'];
  content: Link;
}

export type PortfolioPerson = {
  contentTypeId: Contentful.TypePersonSkeleton['contentTypeId'];
  content: Person;
}

export type PortfolioProject = {
  contentTypeId: Contentful.TypeExperienceSkeleton['contentTypeId'];
  content: Project;
}

export type PortfolioRichText = {
  contentTypeId: Contentful.TypeRichTextSkeleton['contentTypeId'];
  content: RichText;
}

export type PortfolioSection = {
  contentTypeId: Contentful.TypeSectionSkeleton['contentTypeId'];
  content: Section;
};

export type PortfolioTags = {
  contentTypeId: Contentful.TypeTagsSkeleton['contentTypeId'];
  content: Tags;
};

export type PortfolioContent =
  | PortfolioClient
  | PortfolioCollection
  | PortfolioExperience
  | PortfolioLink
  | PortfolioPerson
  | PortfolioRichText
  | PortfolioTags;
