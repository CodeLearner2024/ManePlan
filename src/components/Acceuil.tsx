import React from 'react'
import Image from 'next/image'

const Acceuil = () => {
  return (
    <div className='home'>
        <h1>Nothing is impossible</h1>
        <Image  src="/images/yes.webp" alt="mon image" width={400} height={400}/>
        
        <p><strong> Every great achievement starts with the belief that the impossible is only a challenge waiting to be overcome.</strong></p>
      
    </div>
  )
}

export default Acceuil
