import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeSectionFields {
  name: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  heading?: EntryFieldTypes.Symbol;
  showHeading?: EntryFieldTypes.Boolean;
  contents?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<EntrySkeletonType>
  >;
}

export type TypeSectionSkeleton = EntrySkeletonType<
  TypeSectionFields,
  "section"
>;
export type TypeSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeSectionSkeleton, Modifiers, Locales>;
