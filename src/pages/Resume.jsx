import JoeResume from '../assets/Malatesta_Resume.pdf'
import { Card }  from "react-bootstrap"
const Resume = () => {
  return ( 
    <>
      <Card style={{width: '300px'}} className="center">
        <p className="center">
          Contact me at JoeMalatesta@msn.com</p>
          <p className="center">
          Click to download :  <a href='/Malatesta_Resume.pdf' download> RESUME</a>.
        </p>
      </Card>
      <div className="resume">
        <object data={JoeResume} />
      </div>

      
    </>
   )
}

export default Resume