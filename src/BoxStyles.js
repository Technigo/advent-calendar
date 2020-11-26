import styled from "styled-components";

export const StyledBox = styled.div`
  padding-top: 100%; /* will make it a perfect square ;) */
  position: relative;
  cursor: pointer;

  .front {
    background-color: #5c7fe9;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    p {
      font-family: "Helvetica", sans-serif;
      color: #fff;
      padding: 20px;
      font-weight: 700;
      font-size: 40px;
    }

    &.open {
      transform: rotateY(180deg);
    }
  }

  .back {
    background-color: red;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    transform: rotateY(180deg);

    p {
      font-family: "Helvetica", sans-serif;
      color: #fff;
      padding: 10px;
      text-align: center;
    }

    &.open {
      z-index: 2;
      transform: rotateY(0deg);
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    border-radius: 20px;
    border: 1px solid #fff;
    box-sizing: border-box;
  }
`;
