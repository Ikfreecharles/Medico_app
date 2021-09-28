import styled from "styled-components";

const PatientSummaryContainer = styled.div`
   width: ${(props) => props.width};
   background: ${(props) => props.backgroundcolor};
   border-radius: 30px;
   padding: 2rem;
   height: 350px;
   border: 1px solid #eee;
`;

const Heading = styled.h2`
   color: ${(props) => props.headingcolor};
`;

const PatientSummaryChartContainer = styled.div`
   height: 270px;
   width: 100%;
`;

const PatientSummary = ({
   title,
   headingcolor,
   backgroundcolor,
   width,
   patientsummarychart,
}) => {
   return (
      <PatientSummaryContainer backgroundcolor={backgroundcolor} width={width}>
         <Heading headingcolor={headingcolor}>{title}</Heading>
         <PatientSummaryChartContainer>
            {patientsummarychart}
         </PatientSummaryChartContainer>
      </PatientSummaryContainer>
   );
};

export default PatientSummary;
