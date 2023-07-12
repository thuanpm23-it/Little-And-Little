import React, { ChangeEvent } from "react";
import "../textarea/textarea.css";

interface TextAreaProps {
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string; // Thêm thuộc tính value
  rows?: number;
  cols?: number;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  onChange,
  value,
  rows,
  cols,
  placeholder,
}) => {
  return (
    <div>
      <textarea
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        value={value} // Gán giá trị vào textarea
        onChange={onChange} // Xử lý sự kiện onChange
      />
    </div>
  );
};

export default TextArea;
