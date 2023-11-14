export default function Project({ project }) {
  return (
    <div class="project-card">
      <h3 class="project-title">{project.title}</h3>
      <p class="project-description">{project.description}</p>
      <div class="project-links">
        <a class="btn-primary" href={project.deployed} target="_blank" rel="noopener noreferrer">Live site 🡕 </a>
        <a class="btn-secondary" href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  )
}