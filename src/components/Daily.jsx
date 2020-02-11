import React from "react";
import PropTypes from "prop-types";

function Daily(props) {

  return (
    <div>
    <h1>{props.day}</h1>
    <h3>{props.hours}</h3>
    <hr/>
    <h3>{props.location} at booth {props.booth}</h3>
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
