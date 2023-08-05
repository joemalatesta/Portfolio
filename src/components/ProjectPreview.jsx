import { Card }  from "react-bootstrap"
import { Link } from "react-router-dom"
import createPath from "../utilities/createPath"

function ProjectPreview (props) {
  const path = createPath(props?.title, "projects")
  return (
    <Card>
        <Link to={path}>
        <Card.Img variant='top' src={props?.image} />
        <Card.Body>
          <Card.Title>
            {props?.title}
          </Card.Title>
          Click to Learn More
        </Card.Body>
    </Link>
      </Card>
  )
}

export default ProjectPreview