import React from "react";
import { StyledBox } from "./BoxStyles";

const Box = ({ boxData: { id, nr, text, img, open }, handleClick }) => (
  <StyledBox background={img} onClick={() => handleClick(id, nr)}>
    <div className={open ? "front open" : "front"}>
      <p>{nr}</p>
    </div>
    <div className={open ? "back open" : "back"}>
      <p>{text}</p>
    </div>
  </StyledBox>
);

export default Box;
