import TechnologiesList from "../components/TechnologiesList"
import listAllTechnologies from "../utilities/listAllTechnologies"
import street from '../assets/street.gif'
import circle from '../assets/circle.gif'
import triangle from '../assets/triangle.gif'
function Technologies () {
  const technologies = listAllTechnologies()
  return (
    <main style={{backgroundColor: 'black'}} id="technologies">
      <h1>Technologies</h1>
      <TechnologiesList technologies={technologies}/>
      <div>
        <img style={{height:'400px '}} src={triangle} alt="triangle" />
        <img style={{height:'400px '}} src={street} alt="street" />
        <img style={{height:'400px '}} src={circle} alt="circle" />
      </div>
    </main>
  )
}

export default Technologies