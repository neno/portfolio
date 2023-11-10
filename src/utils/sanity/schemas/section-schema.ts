const section = {
  name: "section",
  title: "Sections",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 }
    },
    {
      name: "heading",
      title: "Heading",
      type: "string"
    },
    {
      name: "position",
      title: "Position",
      type: "number"
    },
    {
      name: "content",
      title: "Contents",
      type: "array",
      of: [
        { type: "block" }
      ]
    }
  ]
}

export default section;