import FactCard from "./FactCard"

function FunFactsList(props) {
  return(
    <div id="facts-list">
      <h3>Fun Facts</h3>
      <ul>
        {props?.funFacts?.map((fact)=> 
          <FactCard fact={fact} key={fact.idx}/>
        )}
      </ul>
    </div>
  )
}

export default FunFactsList