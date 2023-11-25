import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeTagsFields {
  name?: EntryFieldTypes.Symbol;
  taglist: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type TypeTagsSkeleton = EntrySkeletonType<TypeTagsFields, "tags">;
export type TypeTags<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeTagsSkeleton, Modifiers, Locales>;
