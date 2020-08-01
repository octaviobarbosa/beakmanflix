import React from "react";

function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}:
        {type === "text" ? (
          <input type={type} value={value} name={name} onChange={onChange} />
        ) : null}
        {type === "textarea" ? (
          <textarea value={value} name={name} onChange={onChange} />
        ) : null}
      </label>
    </div>
  );
}

export default FormField;
