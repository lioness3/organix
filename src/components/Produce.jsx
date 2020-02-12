import React from "react";
import PropTypes from "prop-types";
import "./Produce.css";

function Produce(props) {

  return (
    <div className='produce'>
    <h1>{props.month}</h1>
    <ul>
    <p>{props.selection.map((selection, index) =>
      <li key={index}>{selection}</li>)}
    </p>
    </ul>
    </div>
  );
}

export default Produce;
