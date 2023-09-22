import { styled } from "styled-components";

const InputIndividualContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 75px;

  @media (min-width: 460px) {
    width: 100px;
  }

  @media (min-width: 590px) {
    width: 120px;
  }
`;

export default InputIndividualContainer;
