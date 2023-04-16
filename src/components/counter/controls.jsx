import React from "react";
import './counter.css'

export const Controls = ({onIncr, onDisc}) => (
    <div className="Counter__controls">
    <button type="button" onClick={onIncr}>
      +
    </button>
    <button type="button" onClick={onDisc}>
      -
    </button>
  </div>
)