export const FETCH_ALL_SECTIONS = `{
  allSection(sort: { position: ASC } ) {
    heading
    slug {
      current
    }
    projects {
      _id
      name
    }
  }
}`