//imports from external library
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import styled from "styled-components";

//imports from withint the project

const SelectFilterContainer = styled.div`
   width: 120px;
   div {
      div {
         div {
            font-family: "Work Sans";
            font-size: 1.3rem;
            border-radius: 3px;
            border-color: #fff;
            div {
               padding-top: 0.8rem;
               padding-bottom: 0.8rem;
               color: #dfdfdf;
            }
         }
      }
   }
`;

const SelectFilterComponent = ({ options, label }) => {
   const [showData, setshowData] = useState(options[0]);

   const handleChange = (event) => {
      setshowData(event.target.value);
   };

   return (
      <SelectFilterContainer>
         <Box>
            <FormControl fullWidth>
               <Select
                  id="demo-simple-select"
                  value={showData}
                  onChange={handleChange}
               >
                  {options.map((option, idx) => {
                     return (
                        <MenuItem key={idx} value={option}>
                           {option}
                        </MenuItem>
                     );
                  })}
               </Select>
            </FormControl>
         </Box>
      </SelectFilterContainer>
   );
};

export default SelectFilterComponent;
