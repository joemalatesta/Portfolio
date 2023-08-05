import { Card }  from "react-bootstrap"

function FactCard (props) {
  return (
    <Card id="fact-card">
      <Card.Body>
        <div>
          {props?.fact?.fact}
        </div>
        <img src={props?.fact?.photo} alt="" style={{width: '75px'}} />
      </Card.Body>
    </Card>
  )
}

export default FactCard