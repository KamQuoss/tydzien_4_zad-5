import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.handleMouseEnter = () => {
      this.myRef.current.style.backgroundColor = "green";
      this.myRef.current.style.color = "yellow";
    };
  }
  render() {
    return (
      <button
        ref={this.myRef}
        children={this.props.children}
        onMouseEnter={this.handleMouseEnter}
      />
    );
  }
  componentDidMount() {
    setTimeout(() => {
      this.myRef.current.style.backgroundColor = "red";
      this.myRef.current.style.color = "white";
    }, 1000);
  }
}

export default Button;
