import React from "react";

export default function ReverseResult({ id, resultText, resultNumber }) {
  return (
    <div>{id === "result-1" ? <p>{resultText}</p> : <p>{resultNumber}</p>}</div>
  );
}
