//imports from external libraries
import { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import styled from "styled-components";

const DatePickerStyle = styled.div`
   display: flex;
   align-items: center;

   h4 {
      font-size: 1.2rem;
      margin: 0 1rem 0 0;
      color: #797979;
   }

   .datePickerStyle {
      border-radius: 1rem;
      border: 1px solid #e8e8e8;
      font-family: "Work Sans" !important;
      padding: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      color: #797979;

      div {
         border: none;

         div {
            input {
               color: #797979;
            }
         }

         button {
            svg {
               line {
                  stroke: #797979;
               }
               rect {
                  stroke: #797979;
               }
            }
         }
      }
   }
`;

const DatepickerComponent = () => {
   const [value, onChange] = useState([new Date(), new Date()]);
   return (
      <DatePickerStyle>
         <h4>Report:</h4>
         <DateRangePicker
            onChange={onChange}
            value={value}
            dayPlaceholder={"DD"}
            monthPlaceholder={"MM"}
            yearPlaceholder={"YY"}
            className={"datePickerStyle"}
         />
      </DatePickerStyle>
   );
};

export default DatepickerComponent;
