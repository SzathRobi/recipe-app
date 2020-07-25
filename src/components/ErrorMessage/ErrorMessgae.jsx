import React from "react";
import "./ErrorMessage.css";

export default function ErrorMessage({ title }) {
  return (
    <div className="error-message">
      <h2>{title}</h2>
    </div>
  );
}
