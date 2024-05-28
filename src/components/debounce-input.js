import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const DebouncedINput = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const debouncedValue = useDebounce(inputText, 1000);

  return (
    <div>
      <p>{inputText}</p>
      <p>{debouncedValue}</p>
      <input
        type="text"
        placeholder="Type Something..."
        value={inputText}
        onChange={handleChange}
      />
    </div>
  );
};

export default DebouncedINput;
