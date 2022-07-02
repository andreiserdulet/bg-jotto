import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Button.scss";
const Button = () => {
  const secretWord = useSelector(state => state.secretWord);
  const [showSecretWord, setShowSecretWord] = useState(false);
  return (
    <div className='giggle-container'>
      <img
        src='https://cdn-0.emojis.wiki/emoji-pics/microsoft/thinking-face-microsoft.png'
        alt='freeze'
        className='giggle'
        onClick={() => {
          setShowSecretWord(!showSecretWord);
        }}
      />
      {showSecretWord && (
        <marquee>
          Yana, You should never give up!!! But only for this time... The secret
          word is: {secretWord}
        </marquee>
      )}
    </div>
  );
};
export default Button;
