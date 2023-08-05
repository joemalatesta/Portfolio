import { useLocation } from 'react-router-dom'
import findTechnology from "../utilities/findTechnology"
import findProjectsByTechnology from "../utilities/findProjectsByTechnology"
import ProjectsList from '../components/ProjectsList'

function TechnologyDetails () {
  const location = useLocation()
  const technology = findTechnology(location.pathname)
  const projects = findProjectsByTechnology(technology)

  return(
    <main id="technology-detail">
      <h1>Here are projects I've built using {technology}:</h1>
      <ProjectsList projects={projects}/>
    </main>
  )
}

export default TechnologyDetails