import './Button.css'
import { useState } from "react";

const Button = ({type, setFontSize, fontSize}) => {
  

  return (
    <button type={type} style={{fontSize: `${fontSize}px`}} onClick={() => setFontSize(fontSize + 20)}>Button Text</button>
  );

}

export default Button