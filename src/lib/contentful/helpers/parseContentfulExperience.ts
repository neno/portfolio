import { Asset } from "contentful";
import { Client, ClientEntry, Experience, ExperienceEntry } from "@/types";
import { parseContentfulClient } from ".";

export function parseContentfulExperience(experienceEntry: ExperienceEntry): Experience {
  const { fields, sys } = experienceEntry;
  const { isAProject, title, client, link, fromTo, role, description, skillsUsed, thumbnail } = fields;
  const _id = sys.id;

  return {
    _id,
    // @ts-expect-error - convert Boolean to boolean
    isAProject: Boolean(isAProject),
    // @ts-expect-error - convert symbol to string
    title,
    // @ts-expect-error - convert symbol to string
    fromTo,
    // @ts-expect-error - convert symbol to string
    role,
    // @ts-expect-error - convert symbol to string
    description,
    // @ts-expect-error - convert symbol to string
    skillsUsed,
    client: client ? parseContentfulClient(client as ClientEntry) : undefined,
    // @ts-expect-error - convert symbol to string
    link,
    thumbnail: thumbnail ? thumbnail as Asset<undefined, string> : undefined,
  };
}
