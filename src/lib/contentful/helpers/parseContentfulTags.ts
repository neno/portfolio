import { Link, LinkEntry, Tags, TagsEntry } from "@/types";

export function parseContentfulTags(tagsEntry: TagsEntry): Tags {
  const { fields, sys } = tagsEntry;
  const { name, taglist } = fields;
  const _id = sys.id;

  return {
    _id,
    // @ts-expect-error - convert symbol to string
    name,
    // @ts-expect-error - convert symbol to string
    taglist,
  };
}
