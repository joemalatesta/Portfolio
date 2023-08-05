import TechnologiesList from "../components/TechnologiesList"
import listAllTechnologies from "../utilities/listAllTechnologies"
import JoeResume from '../assets/Malatesta_Resume.pdf'
// function Resume() {
//   const technologies = listAllTechnologies()
//   return (
//     <main id='resume'>
//       <h1>Resume</h1>
//       <p>
//         Click the link to download <a href='/Lascano_Resume.pdf' download>my resume</a>.
//       </p>
//       <h2>Skills:</h2>
//       <TechnologiesList technologies={technologies}/>
//       </main>
//   )
// }

const Resume = () => {
  return ( 
    <>
      <p className="center">
        Contact me at JoeMalatesta@msn.com</p>
        <p className="center">
        Click to download :  <a href='/Malatesta_Resume.pdf' download> RESUME</a>.
      </p>
      <div className="resume">
        <object data={JoeResume} />
      </div>

      
    </>
   )
}

export default Resume