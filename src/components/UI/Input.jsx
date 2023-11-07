import React from "react";

function Input({ id, label, hasError, className, ...attributes }) {
  const errorClass = hasError ? "error" : "";
  return (
    <div className="input-group">
      <div className="labels">
        <label className="secondary-lead color-dark-slate-grey" htmlFor={id}>{label}</label>
        {hasError && <p id="labels-error" className="secondary-lead">Valid email required</p>}
      </div>
      <input
        id={id}
        className={`${errorClass} ${className ? className : ""}`}
        {...attributes}
      />
    </div>
  );
}

export default Input;
