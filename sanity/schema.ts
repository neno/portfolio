import { type SchemaTypeDefinition } from 'sanity'
import section from "./schemas/section";
import project from "./schemas/project";
import blockContent from "./schemas/blockContent";
import tag from "./schemas/tag";
import experience from "./schemas/experience";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, section, experience, blockContent, tag],
}
