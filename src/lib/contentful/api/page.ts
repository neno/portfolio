import { Entry } from "contentful";
import { contentfulClient } from "../contentfulClient";
import { TypePageSkeleton } from "../types";

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
