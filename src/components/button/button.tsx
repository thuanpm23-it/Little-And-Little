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
  type?: "button" | "submit" | "reset";
  onClick?: () => void; // Thêm onClick vào ButtonProps
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
  type,
  onClick, // Nhận onClick từ props
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

  return (
    <button style={buttonStyle} type={type} onClick={onClick}>
      {" "}
      {/* Sử dụng onClick từ props */}
      {label}
    </button>
  );
};

export default Button;
