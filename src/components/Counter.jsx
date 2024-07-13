import React, { useState } from "react";
import styled from "styled-components";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  function handleOneCounter() {
    setCounter(counter + 1);
    if (counter >= 25) {
      setCounter("25");
    }
  }

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  function handleFiveCounter() {
    setCounter(counter + 5);
  }

  function clearBtn() {
    setCounter(0);
  }

  return (
    <div>
      <StyledCount prev={counter}>{counter}</StyledCount>
      <StyledSection>
        <StyledButton onClick={handleOneCounter} disabled={counter === 25}>
          +1
        </StyledButton>

        <StyledButton onClick={handleFiveCounter}>+5</StyledButton>

        <StyledButton onClick={clearBtn}>clear</StyledButton>
      </StyledSection>
    </div>
  );
};

const StyledButton = styled.button`
  color: black;
  background-color: pink;
  width: 150px;
  height: 150px;
`;
const StyledSection = styled.section`
  display: flex;
  justify-content: space-evenly;
`;
const StyledCount = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
