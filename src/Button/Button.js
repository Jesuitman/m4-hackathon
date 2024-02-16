import './Button.css'

const Button = ({ type, setFontSize, fontSize, colors }) => {

  return (
    <button
      type={type}
      style={{ fontSize: `${fontSize}px`, backgroundColor: colors.buttonColorSB2, color: colors.buttonColorSB1 }}
      onClick={() => setFontSize(fontSize + 20)}>Button Text
    </button>
  );
}

export default Button;