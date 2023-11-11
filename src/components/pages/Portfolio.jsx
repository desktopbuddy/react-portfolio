import Project from "../Project";

const projects = [
  {
    title: "Resume Radar",
    description: "A webapp to track the statuses of your job applications",
    github: "https://github.com/marissacraig/ResumeRadar",
    deployed: "https://resume-radar-eeacc5a0ba4b.herokuapp.com/login"
  },
  {
    title: "Text Editor",
    description: "A PWA text editor",
    github: "https://github.com/desktopbuddy/pwa-text-editor",
    deployed: "https://salty-lake-19885-9b5f819c5c62.herokuapp.com/"
  },
  {
    title: "Tech Blog",
    description: "A CMS-style blog made with MVC design",
    github:"https://github.com/desktopbuddy/tech-blog",
    deployed: "https://tranquil-badlands-98042-f531b135d31f.herokuapp.com/"
  },
  {
    title: "Employee Tracker",
    description: "A CLI application that tracks employees.",
    github: "https://github.com/desktopbuddy/employee-tracker"
  },
  {
    title: "Movie Munchies",
    description: "A webapp that generates a movie and dinner pairing for a fun date night",
    github: "https://github.com/marissacraig/MovieMunchies",
    deployed: "https://marissacraig.github.io/MovieMunchies/"
  },
  {
    title: "Note Taker",
    description: "An app used to write and save notes, made with Express.js",
    github: "https://github.com/desktopbuddy/Note-Taker",
    deployed: "https://fast-badlands-88525-9b873929da1c.herokuapp.com/"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio-section">
      <div class="project-container">
        {projects.map((project) => (<Project project={project}/>))}
      </div>
    </section>
  )
}