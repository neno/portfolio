import { ContentCollection } from './ContentCollection';
import { ContentLink } from './ContentLink';
import { ContentRichText } from './ContentRichText';
import { ContentPerson } from './ContentPerson';
import {
  TypeCollectionSkeleton,
  TypeLinkSkeleton,
  TypeRichTextSkeleton,
  TypeSectionSkeleton,
} from '@/types/contentful';
import { ContentTypeId, PortfolioContent } from '@/types';
import { ContentTags } from './ContentTags';
import { ContentClient } from './ContentClient';
import { ContentExperience } from './ContentExperience';

export type ContentTypeSkeletons =
  | TypeSectionSkeleton
  | TypeLinkSkeleton
  | TypeCollectionSkeleton
  | TypeRichTextSkeleton;

const contentTagMap = new Map();
contentTagMap.set('client', ContentClient);
contentTagMap.set('collection', ContentCollection);
contentTagMap.set('experience', ContentExperience);

contentTagMap.set('link', ContentLink);
contentTagMap.set('person', ContentPerson);
contentTagMap.set('richText', ContentRichText);
contentTagMap.set('tags', ContentTags);

type ContentSectionProps = {
  contentTypeId: ContentTypeId;
  content: PortfolioContent;
};

export function Content({ content, contentTypeId }: ContentSectionProps) {
  const ContentTag = contentTagMap.get(contentTypeId);

  return <ContentTag content={content}></ContentTag>;
}
