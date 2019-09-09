import React, { useState } from "react";
import ReverseInput from "./ReverseInput";
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

  const reverseNumber = () => {
    let { number } = input;
    let reverse = number
      .split("")
      .reverse()
      .join("");
    setResult({ ...result, number: reverse });
  };
  const { text } = result;
  const { number } = result;
  console.log(input.text, "ini input text");
  console.log(result.text, "ini result text");
  console.log(input.number, "ini input number");
  console.log(result.number, "ini result number");

  return (
    <div>
      <div id="input-1">
        <ReverseInput name="text" onChange={handleInput} />
        <p>Click Button to Reverse the Word</p>
        <ReverseButton id="button-1" clickText={reverseWord} />
        <ReverseResult id="result-1" resultText={text} />
      </div>

      <div id="input-2">
        <ReverseInput name="number" onChange={handleInput} />
        <p>Click Button to Reverse the Number</p>
        <ReverseButton id="button-2" clickNumber={reverseNumber} />
        <ReverseResult id="result-2" resultNumber={number} />
      </div>
    </div>
  );
}
