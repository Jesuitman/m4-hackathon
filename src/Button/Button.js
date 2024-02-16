import './Button.css'
import { useState } from "react";

const Button = ({ type, colors }) => {
  const [fontSize, setFontSize] = useState(36);

  return (
    <button
      type={type}
      style={{ fontSize: `${fontSize}px`, backgroundColor: colors.buttonColorSB2, color: colors.buttonColorSB1 }} 
      onClick={() => setFontSize(fontSize + 20)}>Button Text
      </button>
  );

}

export default Button