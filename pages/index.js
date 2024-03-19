"use client";
import React, { useEffect, useState } from "react";
import HomePage from "@/component/Home";
import Header from "@/component/header/header";
import Footer from "@/component/footer/footer";
import Head from "next/head";

export const metadata = {
  title: "contact - page",
  description: "description",
};
function Home({ productItem, categoryItems }) {
  const [productItems,setProductItems]=useState([])
  useEffect(() => {
    setProductItems(productItem)
  }, [productItem])
  
  useEffect(() => {
    document.body.style.margin = "0";
    return () => {
      document.body.style.margin = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>PLP E-commerce Task</title>
        <meta name="description" content="I Generated by PLP" />
      </Head>
      <Header />
      <HomePage productItems={productItems} setProductItems={setProductItems} categoryItems={categoryItems} />
      <Footer />
    </>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const { query } = context;
  const selected = query.selected || "asc";
  const res = await fetch(`https://fakestoreapi.com/products?sort=${selected}`);
  const productItem = await res.json();
  const response = await fetch(`https://fakestoreapi.com/products/categories`);
  const categoryItems = await response.json();
  return { props: { productItem, categoryItems } };
}
