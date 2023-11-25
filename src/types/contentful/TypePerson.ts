import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypePersonFields {
  name: EntryFieldTypes.Symbol;
  title: EntryFieldTypes.Symbol;
  email: EntryFieldTypes.Symbol;
  phone: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  image?: EntryFieldTypes.AssetLink;
}

export type TypePersonSkeleton = EntrySkeletonType<TypePersonFields, "person">;
export type TypePerson<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypePersonSkeleton, Modifiers, Locales>;
