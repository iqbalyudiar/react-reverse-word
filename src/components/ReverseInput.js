import React from "react";

export default function ReverseInput({ onChange, name }) {
  return (
    <div>
      {name === "text" ? (
        <input type="text" name="text" onChange={onChange} />
      ) : (
        <input type="text" name="number" onChange={onChange} />
      )}
    </div>
  );
}
