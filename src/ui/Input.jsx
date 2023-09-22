import styled, { css } from "styled-components";

const Input = styled.input`
  //width: 75px;
  height: 45px;
  padding-left: 10px;
  border-radius: 5px;
  border-left-width: none;
  border-top-width: none;

  border-width: 0.1px;
  border-color: var(--color-neutral-light-gray);
  cursor: pointer;
  outline: none;
  offset: none;

  &:focus {
    border-color: var(--color-primary-purple); // Change border color on focus
  }

  ${(props) =>
    props.$date
      ? css`
          border-color: var(--color-neutral-light-gray);
        `
      : css`
          border-color: var(--color-primary-light-red);
        `}

  @media (min-width: 590px) {
    height: 55px;
    padding-left: 15px;
  }
`;

export default Input;
