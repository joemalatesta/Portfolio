import { about } from "../data/about.js"
import { Card }  from "react-bootstrap"
import BooksList from "../components/BooksList.jsx"
import FunFactsList from "../components/FunFactsList.jsx"

function About () {
  return (
    <main id="about">
      <section id="meetTheEngineer">
          <h1>Meet The Engineer:</h1>
        <Card id='aboutCard'>
          <p>
            Hello! I'm Joe Malatesta, a highly motivated and dedicated Instructional Associate with 2 years of experience at General Assembly. Throughout my career, I have honed my skills in classroom support, technical troubleshooting, student engagement, and curriculum development. My passion lies in enhancing the learning experience and contributing to student success.</p>
          <p>
            At General Assembly, I have been actively collaborating with instructors to create engaging classroom environments that foster better learning outcomes. I take pride in my ability to assist with technical setups and troubleshooting to ensure seamless class delivery. Additionally, I provide valuable feedback on student assignments and projects, helping them grow and improve.
          </p>
          <p>
            My commitment to student success extends to managing administrative tasks, such as attendance tracking and student records. I strongly believe in creating an inclusive and positive learning environment, where every student feels supported and encouraged.
          </p>
          <p>  
            One of the highlights of my experience at General Assembly is my contribution to curriculum development. I've been part of the team that has crafted and refined courses to meet the ever-evolving needs of the software engineering field. Analyzing solutions and coding fixes for software problems is a challenge I embrace, and I've also actively developed web applications using a variety of engineering languages.
          </p>
          <p>  
            I am a problem solver by nature, and I enjoy tackling complex challenges head-on. I adhere to best practices and standards in code development, testing, and troubleshooting, ensuring high-quality outcomes in all my projects.
          </p>
          <p>  
            If you're looking for an enthusiastic and dedicated Instructional Associate and Software Engineer, I would be thrilled to contribute my skills and expertise to your team. Feel free to contact me at joemalatesta@msn.com to discuss potential collaborations or opportunities.
          </p>
       
        </Card>
      </section>

      <section id="moreAboutMe">
          <FunFactsList funFacts={about.funFacts}/>
          <BooksList books={about.favoriteBooks} />
      </section>
    </main>
  )
}


export default About