import React, { useState } from "react";
import ReverseButton from "./ReverseButton";
import ReverseResult from "./ReverseResult";

export default function Reverse() {
  const [input, setInput] = useState({
    text: "",
    number: "",
    numberSorting: ""
  });
  const [result, setResult] = useState({
    text: "",
    number: "",
    numberSorting: ""
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const reverseWord = () => {
    let { text } = input;
    let reverse = text
      .split("")
      .reverse()
      .join("");
    setResult({ ...result, text: reverse });
  };

  const { text } = result;
  console.log(input.text);
  console.log(result.text);

  return (
    <div>
      <input type="text" name="text" onChange={handleInput} />
      <p>Click Button to Reverse the Word</p>
      <ReverseButton onClick={reverseWord} />
      <ReverseResult result={text} />
    </div>
  );
}
