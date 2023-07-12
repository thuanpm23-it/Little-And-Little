import React, { ChangeEvent } from "react";
import "../input/input.css";

interface InputProps {
  placeholder?: string;
  width?: string;
  padding?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  width,
  padding,
  value,
  onChange,
}) => {
  const inputStyle: React.CSSProperties = {
    width: width ?? "100%",
    padding: padding,
  };

  return (
    <div>
      <input
        type="text"
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
