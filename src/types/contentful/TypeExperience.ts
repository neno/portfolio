import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeClientSkeleton } from "./TypeClient";

export interface TypeExperienceFields {
  isAProject?: EntryFieldTypes.Boolean;
  title: EntryFieldTypes.Symbol;
  client?: EntryFieldTypes.EntryLink<TypeClientSkeleton>;
  fromTo: EntryFieldTypes.Symbol;
  role?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Text;
  skillsUsed: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  link?: EntryFieldTypes.Symbol;
  thumbnail?: EntryFieldTypes.AssetLink;
}

export type TypeExperienceSkeleton = EntrySkeletonType<
  TypeExperienceFields,
  "experience"
>;
export type TypeExperience<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeExperienceSkeleton, Modifiers, Locales>;
