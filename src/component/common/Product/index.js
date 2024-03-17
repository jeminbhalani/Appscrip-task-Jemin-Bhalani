"use client";
import Image from "next/image";
import React from "react";
import style from "./Product.module.css";

function Product({ data, handleFavourite }) {
  return (
    <div className={style.productWrapper}>
      <Image
        className={style.productImg}
        src={data?.image}
        width={300}
        height={400}
        alt="Product Image"
      />
      <div className={style.productDetails}>
        <div>
          <p className={style.productName}>{data.title}</p>
          <div className={style.productDescription}>{data.description}</div>
        </div>
        {!((typeof window !== "undefined" ? JSON.parse(localStorage.getItem("favorites")):[]) || []).includes(
          data.id
        ) ? (
          <Image
            onClick={() => handleFavourite(data)}
            className={style.favouriteIcon}
            src="/assets/plp/heart.png"
            width={24}
            height={24}
            alt="Favourite Icon"
          />
        ) : (
          <Image
            onClick={() => handleFavourite(data)}
            className={style.favouriteIcon}
            src="/assets/plp/heart-filled.png"
            width={24}
            height={24}
            alt="Favourite Icon"
          />
        )}
      </div>
    </div>
  );
}

export default Product;
