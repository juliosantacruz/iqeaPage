import Link from 'next/link'
import React from 'react'
import './notFound.scss'


export default function NotFound() {
 const buttonStyle ={
  width:'200px',
  height:'40px',
  borderRadius:'7px',
  border:'1px solid black'
 }
  return (
    <div className='notFound'>
      <h2>Pagina no encontrada</h2>
      <p>Lo sentimos, la pagina a la que quieres acceder no existe o no tienes acceso
        <br/> Haz click para regresar a la pagina principal
      </p>

      <Link href='/' className='buttonStyle'>Inicio</Link>


    </div>
  )
}
