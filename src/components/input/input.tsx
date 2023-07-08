import React from "react";
import "../input/input.css";

interface InputProps {
  //   value: string;
  placeholder?: string;
  width?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, width }) => {
  return (
    <div>
      <input type="text" style={{ width }} placeholder={placeholder} />
    </div>
  );
};

export default Input;
