import { styled } from "styled-components";
import Input from "./Input";
import InputIndividualContainer from "./InputIndividualContainer";
import Paragraph from "./Paragraph";
import { useInput } from "../context/InputContext";
import DateError from "./DateError";

const StyledInputContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 4.5rem;
  margin-top: 3rem;

  @media (min-width: 460px) {
    justify-content: flex-start;
  }

  @media (min-width: 600px) {
    margin-bottom: 3rem;
  }
`;

function InputContainer() {
  const {
    day,
    setDay,
    month,
    setMonth,
    year,
    setYear,
    isValidDay,
    isValidMonth,
    isValidYear,
    submitted,
  } = useInput();
  return (
    <StyledInputContainer>
      <InputIndividualContainer>
        <Paragraph $date={submitted ? isValidDay : true}>DAY</Paragraph>
        <Input
          type="text"
          placeholder="DD"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          $date={submitted ? isValidDay : true}
        />
        {/* {submitted && !isValidDay ? (
          <DateError>Must be a valid day</DateError>
        ) : (
          ""
        )} */}
        {submitted ? (
          day === "" ? (
            <DateError>This field is required</DateError>
          ) : !isValidDay ? (
            <DateError>Must be a valid day</DateError>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </InputIndividualContainer>

      <InputIndividualContainer>
        <Paragraph $date={submitted ? isValidMonth : true}>MONTH</Paragraph>
        <Input
          type="text"
          placeholder="MM"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          $date={submitted ? isValidMonth : true}
        />
        {submitted ? (
          month === "" ? (
            <DateError>This field is required</DateError>
          ) : !isValidMonth ? (
            <DateError>Must be a valid month</DateError>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </InputIndividualContainer>

      <InputIndividualContainer>
        <Paragraph $date={submitted ? isValidYear : true}>YEAR</Paragraph>
        <Input
          type="text"
          placeholder="YYYY"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          $date={submitted ? isValidYear : true}
        />
        {submitted ? (
          year === "" ? (
            <DateError>This field is required</DateError>
          ) : !isValidYear ? (
            <DateError>Must be in the past</DateError>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </InputIndividualContainer>
    </StyledInputContainer>
  );
}

export default InputContainer;
