import React from 'react'
import Image from "next/image";


const About = () => {
  return (
    <div className='acceuil'>
        <h1>About me</h1>
        <h1>NDIHOKUBWAYO Eric</h1>
        <p>Analyste Programmeur</p>
        <Image  src="/images/kkoo.jpg" alt="mon image" width={200} height={200}/>
        <p>
        I am a developer passionate about creating modern web applications.</p>
      
    </div>
  )
}

export default About
