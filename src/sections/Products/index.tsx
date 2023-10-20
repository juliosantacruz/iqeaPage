import React from "react";
import "./Products.scss";
import ProductCard from "@/components/ProductCard";

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

      <div className="productsGroup">
        <ProductCard />
      </div>
    </section>
  );
}
