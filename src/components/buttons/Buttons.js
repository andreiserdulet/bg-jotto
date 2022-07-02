import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { changeColor } from "../../helpers";
import Letter from "./Letter";
import "./Buttons.scss";
import Button from "../_special-button/Button";
const upperCaseAlp = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ш",
  "Щ",
  "Ъ",
  "Ь",
  "Ю",
  "Я",
];

const Buttons = () => {
  const success = useSelector(state => state.success);

  if (success) {
    return <div></div>;
  } else {
    return (
      <>
        <div className='buttons-container'>
          {upperCaseAlp.map((item, index) => {
            return (
              <Letter
                key={item}
                letter={upperCaseAlp[index]}
                // id={"letter " + index}
                // key={index}
                // className='button-colors'
                // onClick={() => {
                //   // letterColor[index] = changeColor(letterColor[index]);
                //   // document.getElementById(
                //   //   "letter " + index
                //   // ).style.backgroundColor = letterColor[index];
                // }}
              ></Letter>
            );
          })}
        </div>
        <Button />
      </>
    );
  }
};
export default Buttons;
