import { Card }  from "react-bootstrap"

function FactCard (props) {
  return (
    <Card id="fact-card">
      <Card.Body>
        <img id="picMargin" src={props?.fact?.photo} alt="" style={{width: '150px'}} />
        <div>
          {props?.fact?.fact}
        </div>
      </Card.Body>
    </Card>
  )
}

export default FactCard