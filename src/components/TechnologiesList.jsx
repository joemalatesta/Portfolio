import TechnologyPreview from "./TechnologyPreview"


function TechnologiesList(props) {

  console.log(props);
  return(
    <div id="technologies-list" >
      <ul>
        {props.technologies.map((technology, idx) => 
          <div key={idx}>
            <TechnologyPreview  technology={technology} />
            
          </div>
        )}
      </ul>
    </div>
  )
}

export default TechnologiesList