import {defineField, defineType} from "sanity";

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
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
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url"
    }),
    defineField({
      name: "contents",
      title: "Contents",
      type: "blockContent",
    })
  ]
})
