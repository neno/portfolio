import { Client, ClientEntry } from "@/types";

export function parseContentfulClient(clientEntry: ClientEntry): Client {
  const { fields, sys } = clientEntry;
  const { name, link, logo, summary } = fields;
  const _id = sys.id;

  return {
    _id,
    // @ts-expect-error - convert symbol to string
    name,
    // @ts-expect-error - convert symbol to string
    link,
    // @ts-expect-error - convert symbol to string
    logo,
    // @ts-expect-error - convert symbol to string
    summary,
  };
}
