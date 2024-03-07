import { ArrowConatiner } from "./ArrowElements";

import { LeftArrow } from "../../../components/MUI/LeftArrow";
import { RightArrow } from "../../../components/MUI/RightArrow";
import { MONTHS } from "../../../utils/transactions/data";
import {
  handlePreviousMonth,
  handleNextMonth,
} from "../../../utils/transactions/helpers";

export const Arrows = ({
  currentMonth,
  setCurrentMonth,
  currentYear,
  setCurrentYear,
}) => {
  return (
    <ArrowConatiner>
      <LeftArrow
        onClick={() =>
          handlePreviousMonth(
            currentMonth,
            setCurrentMonth,
            currentYear,
            setCurrentYear
          )
        }
      />
      {MONTHS[currentMonth]} {currentYear}
      <RightArrow
        onClick={() =>
          handleNextMonth(
            currentMonth,
            setCurrentMonth,
            currentYear,
            setCurrentYear
          )
        }
      />
    </ArrowConatiner>
  );
};
