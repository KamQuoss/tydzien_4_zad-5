import React from "react";

const AnotherButton = React.forwardRef((props, ref) => (
  <button ref={ref} onMouseEnter={props.onMouseEnter}>
    {props.children}
  </button>
));

export default AnotherButton;
