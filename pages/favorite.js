"use client";
import Footer from "@/component/footer/footer";
import Header from "@/component/header/header";
import React, { useEffect, useState } from "react";
import style from "./Custom.module.css";
import Product from "@/component/common/Product";

function Favorite({ productItems }) {
  const [products, setProducts] = useState();
  useEffect(() => {
    document.body.style.margin = "0";
    return () => {
      document.body.style.margin = "";
    };
  }, []);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedProducts = productItems.map((product) => ({
      ...product,
      isFavorite: favorites.includes(product.id),
    }));
    setProducts(updatedProducts);
  }, []);
  const handleFavourite = (data) => {
    let productId = data.id;
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, isFavorite: !product.isFavorite }
        : product
    );
    setProducts(updatedProducts);

    // Update localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const existingIndex = favorites.indexOf(productId);
    if (existingIndex !== -1) {
      // Remove from favorites
      favorites.splice(existingIndex, 1);
    } else {
      // Add to favorites
      favorites.push(productId);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  let favItems = productItems.filter((data) =>
    (typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
    ).includes(data.id)
  );
  
  return (
    <>
      <Header />
      <div className={style.container}>
        <h1>Favourite</h1>
        <div className={style.productWrap}>
          {favItems?.map((data, index) => {
            return (
              <Product
                data={data}
                key={data.id}
                handleFavourite={handleFavourite}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Favorite;

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const productItems = await res.json();
  return { props: { productItems } };
}
