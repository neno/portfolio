import {defineField, defineType} from "sanity";

export default defineType({
  name: "tag",
  title: "Tag",
  type: "object",
  fields: [
    defineField({
      name: "value",
      type: "string"
    }),
    defineField({
      name: "label",
      type: "string"
    })
  ]
})