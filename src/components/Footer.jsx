import gitHub from '../assets/whiteGh.png'
import linkedin from '../assets/linkedin.png'
import codewars from '../assets/codewars.png'
function Footer () {
  return (
    <div id="footer">
        <a rel="noreferrer" target='_blank' href="https://github.com/joemalatesta" >Github <img src={gitHub} alt="github" style={{height: "40px"}} /></a>
        <a rel="noreferrer" target='_blank' href="https://www.codewars.com/users/JoeMalatesta" >CodeWars <img src={codewars} alt="codewars" /></a>
        <a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/josephamalatesta/" >Linkdin <img src={linkedin} alt="linkdin"  style={{height: "30px"}}/></a>
    </div>
  )
}

export default Footer