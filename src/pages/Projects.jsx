import { projects } from "../data/projects"
import ProjectsList from "../components/ProjectsList"

function Projects() {
  return (
    <main id="projects">
      <h1>Projects</h1> 
      <ProjectsList projects={projects}/>
    </main>
  )
}


export default Projects