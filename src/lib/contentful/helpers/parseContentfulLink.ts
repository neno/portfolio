import { Link, LinkEntry } from "@/types";

export function parseContentfulLink(linkEntry: LinkEntry): Link {
  const { fields, sys } = linkEntry;
  const { title, url } = fields;
  const _id = sys.id;

  return {
    _id,
    // @ts-expect-error - convert symbol to string
    title,
    // @ts-expect-error - convert symbol to string
    url,
  };
}
