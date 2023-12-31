import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeClientFields {
  name: EntryFieldTypes.Symbol;
  link?: EntryFieldTypes.Symbol;
  logo?: EntryFieldTypes.AssetLink;
  summary?: EntryFieldTypes.RichText;
}

export type TypeClientSkeleton = EntrySkeletonType<TypeClientFields, "client">;
export type TypeClient<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeClientSkeleton, Modifiers, Locales>;
