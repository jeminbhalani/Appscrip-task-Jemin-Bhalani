"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Dropdown from "../common/Dropdown";
import FilterProductDrawer from "../common/Drawer";
import style from "./Home.module.css";
import { dropDownValue } from "@/utils";

export default function HomePage({ productItems, categoryItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("ASC");


  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={style.container}>
      <h1 className={style.title}>DISCOVER OUR PRODUCTS</h1>
      <p className={style.productDesc}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
      </p>
      <p className={style.productDesc}>
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
      <div className={style.filterToolBar}>
        <div className={style.itemBar}>
          <p className={style.boldText}>{productItems?.length || 0} Items</p>
          <div className={style.filterButton} onClick={toggleDrawer}>
            <Image
              className={`${isOpen ? style.ArrowLeft : ""}`}
              src="/assets/plp/arrow-left.png"
              width={16}
              height={16}
              alt="Arrow Left Logo"
            />
            <span>{isOpen ? "SHOW" : "HIDE"} FILTER</span>
          </div>
        </div>
        <Dropdown
          selected={selected}
          setSelected={setSelected}
          dropDownOption={dropDownValue}
        />
      </div>
      <FilterProductDrawer
        categoryItems={categoryItems}
        productItems={productItems}
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
      />
    </div>
  );
}
