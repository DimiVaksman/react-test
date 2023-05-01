import React, { Component } from 'react';
import './colorPicker.css';
import { useState } from 'react';

export function ColorPickerNew({ options }) {
  const [ activeOptionIdx, setactiveOptionIdx ] = useState(0);



  const makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };


const { label } = options[activeOptionIdx];

  return (
    <div >
      <h2 >Color Picker</h2>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setactiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

