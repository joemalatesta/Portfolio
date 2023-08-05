import { useRef } from 'react';

function Contact() {

  const form = useRef();

 
  return (
    <main id="contact">
        <h1>Contact Me</h1>
      <div id="contact-me">
        <h6><bold>Number:</bold> (240) 486-0546</h6>
        <h6><bold>Email:</bold> <a href="mailto:joemalatesta@msn.com">JoeMalatesta@msn.com</a></h6>
      </div>
    </main>
  )
}


export default Contact