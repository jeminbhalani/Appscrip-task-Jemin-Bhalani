import Footer from "@/component/footer/footer";
import Header from "@/component/header/header";
import React, { useEffect } from "react";
import style from "./Custom.module.css";

function Cart() {

  return (
    <>
      <Header />
      <div className={style.container}>Cart is Empty</div>
      <Footer />
    </>
  );
}

export default Cart;
