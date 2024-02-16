import './Button.css'
import { useState } from "react";

const Button = () => {
  const [fontSize, setFontSize] = useState(36);

  return (
    <button style={{fontSize: `${fontSize}px`}} onChange={() => setFontSize(fontSize + 20)}>Button Text</button>
  );

}

export default Button