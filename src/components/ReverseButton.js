import React from "react";

export default function ReverseButton({ id, clickText, clickNumber }) {
  return (
    <div>
      {id === "button-1" ? (
        <button onClick={clickText}>Reverse Text</button>
      ) : (
        <button onClick={clickNumber}>Reverse Number</button>
      )}
    </div>
  );
}
