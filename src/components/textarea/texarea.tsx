import React, { ChangeEvent } from "react";
import "../textarea/textarea.css";

interface TextAreaProps {
  //   onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  cols?: number;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ rows, cols, placeholder }) => {
  return (
    <div>
      <textarea rows={rows} cols={cols} placeholder={placeholder} />
    </div>
  );
};

export default TextArea;
