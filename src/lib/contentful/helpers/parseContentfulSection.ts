import { Entry } from "contentful";
import { TypeSectionSkeleton } from "@/types/contentful";
import { ContentTypeId, Section } from "@/types";
import { parseContentfulClient, parseContentfulCollection, parseContentfulExperience, parseContentfulLink, parseContentfulPerson, parseContentfulRichText, parseContentfulTags } from ".";


function parseContentfulSectionContents(contents: TypeSectionSkeleton['fields']['contents']): Section['contents'] | undefined {
  if (!contents || !Array.isArray(contents) || contents.length === 0) {
    return;
  }

  let contentCollection: Section['contents'] = [];

  for (const content of contents) {
    const contentType: ContentTypeId = content.sys.contentType.sys.id;

    if (contentType === 'client') {
      const parsedClient = parseContentfulClient(content);
      if (parsedClient) {
        contentCollection.push({
          contentTypeId: contentType,
          content: parsedClient,
        });
      }
    }

    if (contentType === 'collection') {
      const parsedCollection = parseContentfulCollection(content);
      if (parsedCollection) {
        contentCollection.push({
          contentTypeId: contentType,
          content: parsedCollection,
        });
      }
    }

    if (contentType === 'experience') {
      const parsedExperience = parseContentfulExperience(content);
      if (parsedExperience) {
        contentCollection.push({
          contentTypeId: contentType,
          content: parsedExperience,
        });
      }
    }

    if (contentType === 'link') {
      const parsedLink = parseContentfulLink(content);
      if (parsedLink) {
        contentCollection.push({
          contentTypeId: contentType,
          content: parsedLink,
        });
      }
    }

    if (contentType === 'person') {
      const parsedPerson = parseContentfulPerson(content);
      if (parsedPerson) {
        contentCollection.push({
          contentTypeId: contentType,
          content: parsedPerson,
        });
      }
    }

    if (contentType === 'richText') {
      const parsedRichText = parseContentfulRichText(content);
      if (parsedRichText) {
        contentCollection.push({
          contentTypeId: contentType,
          content: parsedRichText,
        });
      }
    }

    if (contentType === 'tags') {
      const parsedTags = parseContentfulTags(content);
      if (parsedTags) {
        contentCollection.push({
          contentTypeId: contentType,
          content: parsedTags,
        });
      }
    }
  }

  return contentCollection;
}

export type SectionEntry = Entry<TypeSectionSkeleton, undefined, string>;
export function parseContentfulSection(sectionEntry: SectionEntry | undefined): Section | undefined {
  if (!sectionEntry || !sectionEntry?.fields) {
    return;
  }
  const _id = sectionEntry.sys.id;
  const { slug, name, heading, showHeading, contents } = sectionEntry.fields;

  let contentCollection: Section['contents'] = [];
  if (contents && Array.isArray(contents) && contents.length > 0) {
    contentCollection = parseContentfulSectionContents(contents as unknown as TypeSectionSkeleton['fields']['contents']);
  }

  return {
    _id,
    // @ts-expect-error - convert symbol to string
    name,
    // @ts-expect-error - convert symbol to string
    slug,
    // @ts-expect-error - convert symbol to string
    heading,
    // @ts-expect-error - convert symbol to string
    showHeading,
    contents: contentCollection,
  };
}
