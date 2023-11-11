import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeClientSkeleton } from "./TypeClient";
import type { TypeTagsSkeleton } from "./TypeTags";

export interface TypeExperienceFields {
  isAProject?: EntryFieldTypes.Boolean;
  title: EntryFieldTypes.Symbol;
  client: EntryFieldTypes.EntryLink<TypeClientSkeleton>;
  link?: EntryFieldTypes.Symbol;
  fromTo: EntryFieldTypes.Symbol;
  role?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Text;
  skillsUsed?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeTagsSkeleton>
  >;
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
