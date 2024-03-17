"use client";
import React, { useEffect, useState } from "react";
import style from "./Filter.module.css";
import Image from "next/image";

function Filter({ categoryItems }) {
  const [accordionOptions, setAccordionOptions] = useState([
    { title: "Ideal for", options: ["Men", "Women", "Kids"], selected: [] },
  ]);
  useEffect(() => {
    if (categoryItems.length) {
      setAccordionOptions([
        { title: "Ideal for", options: categoryItems, selected: [] },
      ]);
    }
  }, [categoryItems]);

  const toggleAccordion = (index) => {
    const updatedOptions = [...accordionOptions];
    updatedOptions[index].isOpen = !updatedOptions[index].isOpen;
    setAccordionOptions(updatedOptions);
  };

  const handleCheckboxChange = (accordionIndex, optionIndex) => {
    const updatedOptions = [...accordionOptions];
    const isChecked =
      updatedOptions[accordionIndex].selected.includes(optionIndex);

    if (isChecked) {
      updatedOptions[accordionIndex].selected = updatedOptions[
        accordionIndex
      ].selected.filter((item) => item !== optionIndex);
    } else {
      updatedOptions[accordionIndex].selected.push(optionIndex);
    }

    setAccordionOptions(updatedOptions);
  };

  const toggleSelectAll = (accordionIndex, selectAll) => {
    const updatedOptions = [...accordionOptions];
    if (selectAll) {
      updatedOptions[accordionIndex].selected = updatedOptions[
        accordionIndex
      ].options.map((_, index) => index);
    } else {
      updatedOptions[accordionIndex].selected = [];
    }
    setAccordionOptions(updatedOptions);
  };
  return (
    <div className={style.filterSection}>
      <div className={style.customizbleCheckbox}>
        <label>
          <input type="checkbox" />
          <span>Customizble</span>
        </label>
      </div>
      {accordionOptions.map((accordion, index) => (
        <div key={index} className={style.accordion}>
          <div
            className={style.accordionHeader}
            onClick={() => toggleAccordion(index)}
          >
            <div>
              <div className={style.accordionTitle}>{accordion.title}</div>
              <div className={style.checkboxWrap}>
                <label className={style.allCheckBox}>
                  <input
                    type="checkbox"
                    checked={
                      accordion.selected.length === accordion.options.length
                    }
                    onChange={(e) => toggleSelectAll(index, e.target.checked)}
                  />
                  <span className={style.accordionAll}>All</span>
                </label>
              </div>
            </div>
            <div>
              <Image
                className={
                  accordion.isOpen ? style.arrowLeft : style.arrowRight
                }
                src="/assets/plp/arrow-left.png"
                width={16}
                height={16}
                alt="Currency Logo"
              />
            </div>
          </div>
          {accordion.isOpen && (
            <div className="accordion-content">
              <div className={style.checkboxWrap}>
                <label className={style.allCheckBox}>
                  <input
                    type="checkbox"
                    checked={
                      accordion.selected.length === accordion.options.length
                    }
                    onChange={(e) => toggleSelectAll(index, e.target.checked)}
                  />
                  Unselect All
                </label>
              </div>
              {accordion.options.map((option, optionIndex) => (
                <div className={style.checkboxWrap} key={optionIndex}>
                  <label>
                    <input
                      type="checkbox"
                      checked={accordion.selected.includes(optionIndex)}
                      onChange={() => handleCheckboxChange(index, optionIndex)}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Filter;
