import {defineField, defineType} from 'sanity'

export default defineType({
  name: "section",
  title: "Sections",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string"
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: Rule => Rule.required()
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "number",
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'project'}}],
    }),
    defineField({
      name: "contents",
      title: "Contents",
      type: "blockContent",
    })
  ]
})