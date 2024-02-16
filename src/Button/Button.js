import './Button.css'
import { useState } from "react";

const Button = ({type}) => {
  const [fontSize, setFontSize] = useState(36);

  return (
    <button type={type} style={{fontSize: `${fontSize}px`}} onClick={() => setFontSize(fontSize + 20)}>Button Text</button>
  );

}

export default Button