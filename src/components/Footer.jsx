import gitHub from '../assets/whiteGh.png'
import linkedin from '../assets/linkedin.png'
import codewars from '../assets/codewars.png'
function Footer () {
  return (
    <div id="footer">
        <a rel="noreferrer" target='_blank' href="https://github.com/joemalatesta" >
          <div className='tech-icons'>
            <img src={gitHub} alt="github" style={{height: "40px"}} />
            GitHub 
          </div>
        </a>
        
        <a rel="noreferrer" target='_blank' href="https://www.codewars.com/users/JoeMalatesta" >
          <div className='tech-icons'>
            <img src={codewars} alt="codewars" />
            CodeWars 
          </div>
        </a>
    
        <a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/josephamalatesta/" >
          <div className='tech-icons'>
            <img src={linkedin} alt="linkdin"  style={{height: "30px"}}/>
            Linkdin 
          </div>
        </a>
    </div>
  )
}

export default Footer