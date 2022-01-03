import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {
      // Render label if ther is label prop
      label ? (
        <label
          className={`${otherProps.value.length} ? 'shrink' : '' form-input-label`}
        >
          {label}
        </label> // Add class shrink if value, else default class
      ) : null
    }
  </div>
);

export default FormInput;
