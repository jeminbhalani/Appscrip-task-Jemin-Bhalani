"use client";
import Image from "next/image";
import React, { useState } from "react";
import style from "./Dropdown.module.css";
import { useRouter } from "next/router";

function Dropdown({ selected, setSelected, dropDownOption }) {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter()

  const handleOpenDropDown = () => {
    setDropdown(!dropdown);
  };

  const handleSelect = (x) => {
    setSelected(x.value);
    router.push({ query: { selected: x.value.toLowerCase() } })
  };
  return (
    <div className={style.dropDown} onClick={handleOpenDropDown}>
      <div className={style.textDropVal}>
        <span className={style.boldText}>{selected}</span>
        <Image
          className={style.ArrowDown}
          src="/assets/plp/arrow-left.png"
          width={16}
          height={16}
          alt="Arrow Left Logo"
        />
      </div>
      <div className={dropdown ? style.openDropDown : style.closeDropDown}>
        {dropDownOption.map((x) => {
          return (
            <p key={x.key} className={x.value === selected ? style.boldText: style.normalText} onClick={() => handleSelect(x)}>
              {x.value === selected ? (
                <Image
                  src="/assets/plp/true-mark.png"
                  width={16}
                  height={16}
                  alt="Arrow Left Logo"
                />
              ) : null}
              <span>{x.value}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
