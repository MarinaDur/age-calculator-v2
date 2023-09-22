import { styled } from "styled-components";
import Image from "./Image";
import { useInput } from "../context/InputContext";

const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--color-neutral-light-gray);
  position: relative;
`;

const StyledButton = styled.div`
  width: 50px;
  height: 50px;
  background: var(--color-primary-purple);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:active {
    background: var(--color-neutral-off-black);
  }

  @media (min-width: 740px) {
    left: 97%;
    width: 70px;
    height: 70px;
  }
`;

function DividerButton() {
  const { handleCalculation } = useInput();
  return (
    <StyledDivider>
      <StyledButton onClick={handleCalculation}>
        <Image src="icon-arrow.svg" alt="arrow button"></Image>
      </StyledButton>
    </StyledDivider>
  );
}

export default DividerButton;
