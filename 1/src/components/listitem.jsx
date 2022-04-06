import React from "react";
import PropTypes from "prop-types";
const Listitem = (props) => {
  return <div>{props.name}</div>;
};

export default Listitem;

Listitem.propTypes = {
  name: PropTypes.string.isRequired,
};
