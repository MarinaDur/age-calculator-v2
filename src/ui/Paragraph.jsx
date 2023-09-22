import { styled } from "styled-components";

const Paragraph = styled.p.attrs((props) => ({
  style: {
    color: props.$date
      ? "var(--color-neutral-smokey-gray)"
      : "var(--color-primary-light-red)",
  },
}))`
  letter-spacing: 1.1px;
  font-size: 1.1rem;
`;

export default Paragraph;
