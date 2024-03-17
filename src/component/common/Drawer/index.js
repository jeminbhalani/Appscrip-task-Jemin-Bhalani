"use client";
import React, { useEffect, useState } from "react";
import style from "./Drawer.module.css";
import Product from "../Product";
import Filter from "@/component/Filter";
import Image from "next/image";

function FilterProductDrawer({
  isOpen,
  productItems,
  categoryItems,
  toggleDrawer,
}) {
  const [products, setProducts] = useState();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedProducts = productItems.map(product => ({
      ...product,
      isFavorite: favorites.includes(product.id),
    }));
    setProducts(updatedProducts);
  }, []);
  const handleFavourite = (data) => {
    let productId = data.id;
    const updatedProducts = products.map(product =>
      product.id === productId
        ? { ...product, isFavorite: !product.isFavorite }
        : product
    );
    setProducts(updatedProducts);

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const existingIndex = favorites.indexOf(productId);
    if (existingIndex !== -1) {
      favorites.splice(existingIndex, 1);
    } else {
      favorites.push(productId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  return (
    <div className={style.drawerContainer}>
      <div className={`${style.drawer} ${isOpen ? style.open : style.close}`}>
        <div className={style.closeIcon}>
          <Image
            onClick={toggleDrawer}
            src="/assets/plp/close-icon.jpg"
            width={12}
            height={12}
            alt="Close Icon"
          />
        </div>
        <Filter categoryItems={categoryItems} />
      </div>
      <div
        className={isOpen ? style.closeContent : style.content}
      >
        <div className={style.productWrap}>
          {productItems?.map((data, index) => {
            return (
              <Product
                key={index}
                data={data}
                handleFavourite={handleFavourite}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FilterProductDrawer;
