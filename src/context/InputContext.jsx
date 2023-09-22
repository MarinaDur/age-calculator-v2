import { createContext, useContext, useState } from "react";
import ageCalculator from "../utillis/ageCalculator";
import PropTypes from "prop-types";

import {
  validateDay,
  validateMonth,
  validateYear,
} from "../utillis/validateDates";

InputProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
const InputContext = createContext();

function InputProvider({ children }) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const isValidDay =
    day && validateDay(Number(day), Number(month), Number(year));
  const isValidMonth = month && validateMonth(Number(month));
  const isValidYear = year && validateYear(Number(year));

  function handleCalculation() {
    setSubmitted(true);
    if (!isValidDay || !isValidMonth || !isValidYear) return;

    const { years, months, days } = ageCalculator(
      Number(day),
      Number(month),
      Number(year)
    );
    setAge({ years, months, days });
    clear();
  }

  function clear() {
    setDay("");
    setMonth("");
    setYear("");
    setSubmitted(false);
  }

  return (
    <InputContext.Provider
      value={{
        day,
        setDay,
        month,
        setMonth,
        year,
        setYear,
        handleCalculation,
        age,
        isValidDay,
        isValidMonth,
        isValidYear,
        submitted,
      }}
    >
      {children}
    </InputContext.Provider>
  );
}

function useInput() {
  const context = useContext(InputContext);
  if (context === undefined)
    throw new Error("Input conteXt was used outside of the InputProvider");
  return context;
}

export { InputProvider, useInput };
