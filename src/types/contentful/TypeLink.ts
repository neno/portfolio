import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeLinkFields {
  title: EntryFieldTypes.Symbol;
  url: EntryFieldTypes.Symbol;
}

export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, "link">;
export type TypeLink<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeLinkSkeleton, Modifiers, Locales>;
