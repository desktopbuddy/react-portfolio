export default function Project({ project }) {
  return (
    <div class="project-card">
      <h3 class="project-title">{project.title}</h3>
      <p class="project-description">{project.description}</p>
      <div class="project-links">
        <button class="live-btn" onClick={`location.href=${project.deployed}`}>Live site 🡕 </button>
        <button class="github-btn" onClick={`location.href=${project.github}`}>GitHub</button>
      </div>
    </div>
  )
}