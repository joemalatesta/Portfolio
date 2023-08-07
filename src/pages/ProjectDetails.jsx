import { useLocation } from 'react-router-dom'
import findProject from "../utilities/findProject"
import TechnologiesList from '../components/TechnologiesList'
import { Card }  from "react-bootstrap"
function ProjectDetails () {
  const location = useLocation()
  const project = findProject(location.pathname)
  return (
    <main id="project-details">
      <div id="project-detail-img">
        <img  src={project.image} alt={project.title}/>
      </div>
      <div id="project-info">
        <div>
          <h2>{project.title}</h2>
          <Card style={{width:'600px'}}>
            <p >{project.description}</p>

          </Card>
        </div>
      </div>
      <section >
        <TechnologiesList technologies={project.technologies}/>
        <div id="project-detail-bttns" >
          <a
            href={project.repositoryLink}
            target='_blank'
            rel='noreferrer'
          >
            <button>Github</button>
          </a>
          <a
            href={project.deployment}
            target='_blank'
            rel='noreferrer'
          >
            <button>Deployed Version</button>
          </a>
        </div>
      </section>
    </main>
  )
}

export default ProjectDetails