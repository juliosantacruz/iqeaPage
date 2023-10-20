import React from 'react'
import vectorEmail from '@/assets/EmailSubcriptionVector.svg'
import Image from 'next/image'
import './EmailSubcribe.scss'

export default function EmailSubcribe() {
  return (
     
        <div className="SubcribeCard">
            <div className="SubcribeContent">
                <div className="SubcribeText">

                <h2>
                Suscríbete a nuestro canal de noticias para que estes actualizado
                </h2>
                <p>
                Recibe noticias e informacion de la industria para que siempre estes actualizado, es gratis .!
                </p>
                </div>
                <div className="SubcribeInput">
                    <input className='SubcribeInputElement' type='email' placeholder='Tu Correo Electronico'/> 
                    <button className='SubcribeBtn'type='button'>Suscribete</button>
                </div>
            </div>
            <div className="SubcribeImage">
                <Image src={vectorEmail} alt=''/>
            </div>
        </div>

    
  )
}
