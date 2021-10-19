//import from external libraries
import styled from "styled-components";
import SelectFilterComponent from "./SelectFilter.component";

//import from within the project
import Titles from "./Titles.component";

const PatientSummaryContainer = styled.div`
   width: ${(props) => props.width};
   background: ${(props) => props.backgroundcolor};
   border-radius: 3px;
   padding: 2rem;
   height: 400px;
   div {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
`;

const PatientSummaryChartContainer = styled.div`
   margin-top: 2rem;
   height: 80%;
   width: 100%;
`;

const selectOptions = ["Monthly", "Quarterly", "Yearly"];

const PatientSummary = ({
   title,
   headingcolor,
   backgroundcolor,
   width,
   patientsummarychart,
}) => {
   return (
      <PatientSummaryContainer backgroundcolor={backgroundcolor} width={width}>
         <div>
            <Titles title={title} color={headingcolor} />
            <SelectFilterComponent
               options={selectOptions}
               label={"Show Data"}
            />
         </div>

         <PatientSummaryChartContainer>
            {patientsummarychart}
         </PatientSummaryChartContainer>
      </PatientSummaryContainer>
   );
};

export default PatientSummary;
