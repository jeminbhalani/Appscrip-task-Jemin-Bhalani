"use client";
import Image from "next/image";
import React from "react";
import style from "./Header.module.css";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  const handleRedirect = (url) => {
    router.push(`/${url}`);
  };
  return (
    <header>
      <div className={style.headerContainer}>
        <div className={style.headerTop}>
          <div className={style.headerbackground}></div>
        </div>
        <div className={style.headerLogo}>
          <Image
            className={style.mainLogo}
            src="/assets/header/Logo.png"
            width={36}
            height={36}
            alt="Header Logo"
            onClick={()=>handleRedirect("")}
          />
          <div className={style.logoText}>Logo</div>
          <div className={style.headerFnImg}>
            <Image
              src="/assets/header/search.png"
              width={24}
              height={24}
              alt="Search Logo"
              onClick={()=>handleRedirect("")}
            />
            <Image
              src="/assets/header/heart.png"
              width={24}
              height={24}
              alt="Heart Logo"
              onClick={()=>handleRedirect("favorite")}
            />
            <Image
              src="/assets/header/shopping-bag.png"
              width={24}
              height={24}
              onClick={()=>handleRedirect("cart")}
              alt="Shooping Bag Logo"
            />
            <Image
              className={style.hideLogo}
              src="/assets/header/profile.png"
              width={24}
              height={24}
              onClick={()=>handleRedirect("")}
              alt="Profile Logo"
            />
            <Image
              className={style.hideLogo}
              src="/assets/header/language.png"
              width={52}
              height={20}
              alt="Language Logo"
            />
          </div>
        </div>
        <div className={style.headerLinks}>
          <p>SHOP</p>
          <p>SKILLS</p>
          <p>STORIES</p>
          <p>ABOUT</p>
          <p>CONTACT US</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
