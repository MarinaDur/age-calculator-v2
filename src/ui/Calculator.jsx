import { styled } from "styled-components";
import Heading from "./Heading";
import SpanColor from "./SpanColor";
import { useInput } from "../context/InputContext";

const StyledCalculator = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

function Calculator() {
  const { age, day, month, year } = useInput();
  const { years, months, days } = age;

  return (
    <StyledCalculator>
      <Heading>
        <SpanColor>
          {years ? (year || day || month ? "- -" : years) : "- -"}
        </SpanColor>{" "}
        years
      </Heading>
      <Heading>
        <SpanColor>
          {months ? (year || day || month ? "- -" : months) : "- -"}
        </SpanColor>{" "}
        months
      </Heading>
      <Heading>
        <SpanColor>
          {days ? (year || day || month ? "- -" : days) : "- -"}
        </SpanColor>{" "}
        days
      </Heading>
    </StyledCalculator>
  );
}

export default Calculator;
