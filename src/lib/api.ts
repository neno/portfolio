import { TypePageSkeleton, TypeSectionSkeleton } from "@/types/contentful";
import { contentfulClient } from "./contentful/contentfulClient";
import { parseContentfulSection } from "./contentful/helpers";
import { Section } from "@/types";

export async function fetchSection({ slug, preview }: { slug: string; preview: boolean }): Promise<Section | undefined> {
  const contentful = contentfulClient({ preview });

  const contentfulSection = await contentful.getEntries<TypeSectionSkeleton>({
    content_type: "section",
    "fields.slug": slug,
    include: 4,
  });

  return parseContentfulSection(contentfulSection.items[0]);
}

export async function fetchSectionsSlugsByPageName({ name, preview }: { name: string; preview: boolean }): Promise<string[] | undefined> {
  const contentful = contentfulClient({ preview });

  const page = await contentful.getEntries<TypePageSkeleton>({
    content_type: "page",
    "fields.name": name,
  });

  if (!page?.items?.length) {
    return;
  }

  const slugs = page.items[0].fields?.sections.map((section: any) => section.fields.slug);
  return slugs;
}
