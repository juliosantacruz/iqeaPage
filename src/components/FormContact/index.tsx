import React from 'react'
import './FormContact.scss'
import IconArrowRight from '../Icons/IconArrowRight'



export default function FormContact() {
  return (
    <div className='contactFormWrapper'>
        <form className='contactFormForm'>
            <div className="inputGroup">

            <div className="inputRow">
                <label htmlFor="">Nombre *</label>
                <input type="text" name="nombre" id="nombre" />
            </div>

            <div className="inputRow">
                <label htmlFor="">Correo Electronico *</label>
                <input type="email" name="email" id="email" />
            </div>

            <div className="inputRow">
                <label htmlFor="">Asunto *</label>
                <input type="text" name="asunto" id="asunto" />
            </div>

            <div className="inputRow ">
                <label htmlFor="">Mensaje *</label>
                <textarea  name="mensaje" id="mensaje"></textarea>
            </div>
            <div className="btnSubmit">
                <button type="button">Enviar <IconArrowRight/></button>
            </div>
            </div>
        </form>
    </div>
  )
}
