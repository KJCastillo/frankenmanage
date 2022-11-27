import "./ProjectsList.css"

export default function ProjectsList({ projects }) {
  return (
    <div>
        {projects.length === 0 && <p>No projects available</p>}
        {projects.map(project => (
            <div key={project.id}>{project.name}</div>
        ))}
    </div>
  )
}
