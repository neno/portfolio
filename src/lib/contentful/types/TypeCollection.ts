import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeCollectionFields {
  name: EntryFieldTypes.Symbol;
  items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypeCollectionSkeleton = EntrySkeletonType<
  TypeCollectionFields,
  "collection"
>;
export type TypeCollection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeCollectionSkeleton, Modifiers, Locales>;
