import React from "react";
import PropTypes from "prop-types";
import "./Daily.css";

function Daily(props) {

  return (

    <div className="eachDay">
    <h1>{props.day}</h1>
    <h3>{props.hours}</h3>
    <hr/>
    <h3>{props.location}</h3>
    <h4> at booth {props.booth}</h4>
    </div>
  );
}

Daily.propTypes = {
  day: PropTypes.string,
  hours: PropTypes.string,
  location: PropTypes.string,
  booth: PropTypes.string
};

export default Daily;
