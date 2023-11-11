export default function Project({ project }) {
  return (
    <div class="project-card">
      <h3 class="project-title">{project.title}</h3>
      <p>{project.description}</p>
      <div class="project-links">
        <button onClick={`location.href=${project.deployed}`}>Live site</button>
        <button onClick={`location.href=${project.github}`}>GitHub repo</button>
      </div>
    </div>
  )
}