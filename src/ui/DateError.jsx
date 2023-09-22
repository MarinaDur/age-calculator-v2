import { styled } from "styled-components";
import PropTypes from "prop-types";

const StyledDateError = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: var(--color-primary-light-red);
  //width: 75px;
`;
DateError.propTypes = {
  children: PropTypes.node.isRequired,
};
function DateError({ children }) {
  return <StyledDateError>{children}</StyledDateError>;
}

export default DateError;
