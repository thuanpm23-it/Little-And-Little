import React from "react";
import "../input/input.css";

interface InputProps {
  //   value: string;
  placeholder?: string;
  width?: string;
  padding?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, width, padding }) => {
  const inputStyle: React.CSSProperties = {
    width: width ?? "100%",
    padding: padding,
  };
  return (
    <div>
      <input type="text" style={inputStyle} placeholder={placeholder} />
    </div>
  );
};

export default Input;
