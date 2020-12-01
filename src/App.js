import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { StyledApp } from "./AppStyles";
import { createCalendar, validDate } from "./helpers";
import { createCalendar } from "./helpers";
import Box from "./Box";

const GlobalStyle = createGlobalStyle`
  body {
    background: top / auto url("./img/backdrop.png");
    margin: 0;
  }
`;


const App = () =>  {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    // Could use if statements instead off course
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar();

    setBoxes(calendar);
  }, []);

  // Store calendar in localStorage
  useEffect(() => {
    // Could use if statements instead off course
    boxes.length && localStorage.setItem("calendar", JSON.stringify(boxes));
  }, [boxes]);

  const handleToggleBox = (id, nr) => {
    if (!validDate(nr)) return 

    const updatedBoxes = boxes.map(box =>
      box.id === id ? { ...box, open: !box.open } : box
    );
    setBoxes(updatedBoxes);
  };

  return (
    <>
      <GlobalStyle />
      <StyledApp>

      {boxes.map(box => (
        <Box 
        key={box.id}
        boxData={box}
        handleClick={handleToggleBox}
        />
        ))}
      </StyledApp>
      
    </>
  
  );
}

export default App;
