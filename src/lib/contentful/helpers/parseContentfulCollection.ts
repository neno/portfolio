import { Collection, CollectionEntry, Link, LinkEntry, SectionEntry } from "@/types";

export function parseContentfulCollection(collectionEntry: CollectionEntry): Collection {
  const { fields } = collectionEntry;
  const { name, items, wrappingTag } = fields;

  let parsedItems: Collection['items'] = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (!item) {
      continue;
    }

    const { sys } = item as LinkEntry | SectionEntry;
    const contentType = sys.contentType.sys.id;
    const _id = sys.id;

    if (contentType === 'section') {
      const { fields } = item as SectionEntry;
      const { name, slug } = fields;
      parsedItems.push({
        contentTypeId: 'link',
        content: {
          _id,
          // @ts-expect-error - convert symbol to string
          title: name,
          // @ts-expect-error - convert symbol to string
          url: `/${slug}`,
        },
      });
    }

    if (contentType === 'link') {
      const { fields } = item as LinkEntry;
      const { title, url } = fields;
      parsedItems.push({
        contentTypeId: 'link',
        content: {
          _id,
          // @ts-expect-error - convert symbol to string
          title,
          // @ts-expect-error - convert symbol to string
          url,
        },
      })
    }
  }

  return {
    // @ts-expect-error - convert symbol to string
    name,
    items: parsedItems,
    // @ts-expect-error - convert symbol to string
    wrappingTag,
  };
}
