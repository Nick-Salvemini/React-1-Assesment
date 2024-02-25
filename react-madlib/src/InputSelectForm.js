import React, { useState, useRef, useEffect } from "react";
import { v4 as uuid } from 'uuid';

function InputSelectForm({ inputs, onInputSelect }) {
  const [formInputs, setFormInputs] = useState(() =>
    inputs.reduce((acc, input) => ({ ...acc, [input]: "" }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFilled = Object.values(formInputs).every((value) => value.trim() !== '');
    if (!allFilled) {
      alert('Please fill out all fields.');
      return;
    }
    onInputSelect(formInputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map(input => (
        <div key={input}>
          <input
            type="text"
            name={input}
            placeholder={input}
            value={formInputs[input]}
            onChange={handleChange} />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputSelectForm;