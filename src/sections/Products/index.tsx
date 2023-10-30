import React from "react";
import "./Products.scss";
import CardProduct from "@/components/CardProduct";
import ButtonStyle from "@/components/ButtonStyle";

export default function Products() {
  return (
    <section className="productsIqea">
      <div className="productsHeaders">
        <h2>Nuestros Productos</h2>
        <p>
          Somos orgullosos distribuidores de distintas de marcas proveedoras de
          insumos para tu sistema de tratamiento de agua, contamos con filtros,
          quimicos, solventes, equipo de bombeo y mas...
        </p>
      </div>

      <div className="productsGroup centerDiv">
        <CardProduct />
      </div>
      <ButtonStyle>

        <button style={{margin:'20px 0', width:'300px'}}>Ver Mas</button>
      </ButtonStyle>
      
    </section>
  );
}
