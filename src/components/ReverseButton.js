import React from "react";

export default function ReverseButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Reverse</button>
    </div>
  );
}
