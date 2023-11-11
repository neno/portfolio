import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeSectionSkeleton } from "./TypeSection";

export interface TypeLinkFields {
  title: EntryFieldTypes.Symbol;
  section?: EntryFieldTypes.EntryLink<TypeSectionSkeleton>;
  externalUrl?: EntryFieldTypes.Symbol;
  asset?: EntryFieldTypes.AssetLink;
}

export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, "link">;
export type TypeLink<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeLinkSkeleton, Modifiers, Locales>;
