import React from "react";
import "./Navbar.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link href={'#'}>Inicio</Link>
        <Link href={'#'}>Quienes Somos</Link>
        <Link href={'#'}>Servicios</Link>
        <Link href={'#'}>Productos</Link>

        <Link href={'#'}>Proyectos</Link>
        <Link href={'#'}>Contacto</Link>
      </nav>
    </header>
  );
}
