import {defineField, defineType} from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
    }),
    defineField({
      name: "from",
      title: "From",
      type: "date",
    }),
    defineField({
      name: "to",
      title: "To",
      type: "date",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "tag" }]
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url"
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }]
    })
  ]
})
