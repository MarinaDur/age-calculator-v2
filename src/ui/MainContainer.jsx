import styled from "styled-components";
import InputContainer from "./InputContainer";
import DividerButton from "./DividerButton";
import Calculator from "./Calculator";

import { InputProvider } from "../context/InputContext";
import Container from "./Container";

const StyledContainer = styled.main`
  background: var(--color-neutral-white);
  margin: 4rem 1.5rem;
  border-radius: 15px;
  border-bottom-right-radius: 100px;
  padding: 2rem;
  width: 90%;
  max-width: 650px;

  @media (min-width: 600px) {
    padding: 2.5rem 4rem;
    border-bottom-right-radius: 130px;
  }
`;

function MainContainer() {
  return (
    <Container>
      <StyledContainer>
        <InputProvider>
          <InputContainer />
          <DividerButton />
          <Calculator />
        </InputProvider>
      </StyledContainer>
    </Container>
  );
}

export default MainContainer;
