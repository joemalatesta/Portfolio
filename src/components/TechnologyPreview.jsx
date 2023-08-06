import { Link } from "react-router-dom"
import { Card }  from "react-bootstrap"
import createPath from "../utilities/createPath"

function TechnologyPreview (props) {
  const path = createPath(props?.technology, "technologies")
  
  const getTechIcon = (tech) =>{
    console.log(`../assets/techIcons/${tech.toLowerCase()}.png`);
    return `/${tech.toLowerCase()}.png`
  }
  return (
    <Link to={path}>
      <Card id="technology-card">
      <Card.Body className="tech-icons">
        <img src={getTechIcon(props.technology)} style={{width: "30px"}}alt="" />
        {props?.technology}
      </Card.Body>
    </Card>
    </Link>
  )
}

export default TechnologyPreview