import { Person, PersonEntry } from "@/types";

export function parseContentfulPerson(personEntry: PersonEntry): Person {
  const { fields, sys } = personEntry;
  const { name, title, phone, email, description, image } = fields;
  const _id = sys.id;

  return {
    _id,
    // @ts-expect-error - convert symbol to string
    name,
    // @ts-expect-error - convert symbol to string
    title,
    // @ts-expect-error - convert symbol to string
    phone,
    // @ts-expect-error - convert symbol to string
    email,
    // @ts-expect-error - convert symbol to string
    description,
    // @ts-expect-error - convert symbol to string
    image,
  };
}
