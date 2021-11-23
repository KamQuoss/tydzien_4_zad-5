import "./styles.css";
import Button from "./Button";
import AnotherButton from "./AnotherButton";
import React from "react";

export default function App() {
  const ref = React.createRef();
  const handleMouseEnter = () => {
    ref.current.style.backgroundColor = "violet";
    ref.current.style.color = "brown";
  };

  return (
    <div className="App">
      <h1>Zadanie 5</h1>
      <h2>Button</h2>
      <p>
        - button[1] - po załadowaniu aplikacji + 1s kolor zmienia się na
        czerwony
        <br />
        - button[1] - po najechaniu zmienia kolor na zielony
        <br />- button[2] - po najechaniu zmienia kolor na brązowy
      </p>
      <Button>[1] button</Button>

      <br />
      <br />
      <AnotherButton ref={ref} onMouseEnter={handleMouseEnter}>
        [2] with forwarded ref
      </AnotherButton>
    </div>
  );
}
