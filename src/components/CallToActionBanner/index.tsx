import Link from 'next/link'
import React from 'react'
import './CallToActionBanner.scss'

export default function CallToActionBanner() {
  return (
    <div className="callToAction">
      <Link href={'/contacto'}>
          Contactanos
        </Link>
        <Link href={'/formulario/biological-treatment-background'}>
          Cotiza tu Proyecto
        </Link>

      </div>
  )
}
