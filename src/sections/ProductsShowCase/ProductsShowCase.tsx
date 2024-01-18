"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ImageNotFound from "@/assets/Image-not-found.png";
import "./ProductsShowCase.scss";

type categoryType = {
  id: number;
  title: string;
  slug: string;
  description: string;
  products: productType[];
};

type productType = {
  id: number;
  title: string;
  slug: string;
  cover: string;
  altCover: string;
};



export default function ProductsShowCase(props: any) {
  const [leCategory, setCategory] = useState<categoryType>();
  const { productCatArray } = props;

  const handleCategory = (value: categoryType) => {
    setCategory(value);
  };

  const setClassName = (category: any) => {
    if (category.title === leCategory?.title) {
      return "active";
    }
  };

  const defaultValue = productCatArray[0]

  return (
    <div className="ProductsShowCase">
      <div className="categoryProducts">
        <h3>Categorias</h3>
        <ul className="categoryList">
          {productCatArray &&
            productCatArray.map((category: categoryType, ) => {

              return (
                <li
                  key={category.id}
                  onClick={() => handleCategory(category)}
                  className={setClassName(category)}
                >
                  {category.title}
                </li>
              );
            })}
        </ul>
      </div>

      <div className="categoryDetailsSection">
        {leCategory ? <CategoryDetail data={leCategory} /> : <CategoryDetail data={defaultValue} />}
      </div>
    </div>
  );
}

const CategoryDetail = (props: any) => {
  const { data } = props;
  return (
    <section className="categoryDetails">
      <h3>{data.title}</h3>
      {data.description && (
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      )}

      <div className="productsList">
        {data.products &&
          data.products.map((product: any) => {
            return (
              <article key={product.id} className="productCard">
                <Link href={`productos/${data.slug}/${product.slug}`}>
                  <Image
                    src={product.cover || ImageNotFound}
                    alt={product.altCover ? product.altCover : "galeria"}
                    width={200}
                    height={200}
                  />
                  <div className="productTitle">
                    <p>{product.title}</p>
                  </div>
                </Link>
              </article>
            );
          })}
      </div>
    </section>
  );
};
