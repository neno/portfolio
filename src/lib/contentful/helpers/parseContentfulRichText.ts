import { RichText, RichTextEntry } from "@/types";

export function parseContentfulRichText(linkEntry: RichTextEntry): RichText {
  const { fields, sys } = linkEntry;
  const { name, content } = fields;
  const _id = sys.id;

  return {
    _id,
    name: name as unknown as RichText['name'],
    content: content as unknown as RichText['content'],
  };
}
