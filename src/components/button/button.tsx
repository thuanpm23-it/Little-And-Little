import React from "react";
import "../button/button.css";

interface ButtonProps {
  label: string;
  width?: string;
  height?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  lineHeight?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  width,
  height,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  color,
}) => {
  const buttonStyle: React.CSSProperties = {
    width,
    height,
    fontFamily,
    fontSize,
    fontWeight,
    color,
    lineHeight,
  };

  return <button style={buttonStyle}>{label}</button>;
};

export default Button;
