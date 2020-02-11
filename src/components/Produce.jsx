import React from "react";
import PropTypes from "prop-types";

function Produce(props) {

  return (
    <div>
    <h1>{props.month}</h1>
    <p>{props.selection.map((selection, index) =>
      <li key={index}>{selection}</li>)}
    </p>
    </div> 
  );
}

export default Produce;
