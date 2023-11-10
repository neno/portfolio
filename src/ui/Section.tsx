interface IProject {
  _id: string
  name: string
}
interface ISectionProps {
  heading: string
  projects?: IProject[]
}

export const Section = ({heading, projects}: ISectionProps) => {
  return (
    <section>
      <h2>{heading}</h2>
      {projects && <ul>
        {projects.map(project => (
          <li key={project._id}>
            <h3>{project.name}</h3>
          </li>
        ))}
      </ul>}
    </section>
  )
}