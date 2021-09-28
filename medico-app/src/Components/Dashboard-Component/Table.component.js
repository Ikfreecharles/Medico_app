import { Table } from "semantic-ui-react";

//Table styles
const tableStyle = {
   paddingTop: "1.2rem",
   paddingBottom: "1.2rem",
   cursor: "pointer",
   border: "none",
};
const tableCell = {
   color: "#CBCBCB",
   paddingTop: "1.2rem",
   paddingBottom: "1.2rem",

   border: "none",
};
const tableContainerStyle = {
   border: "none",
};
//Styles
const ongoingTreatmentStyle = {
   color: "#396CFF",
   cursor: "pointer",
   border: "none",
};
const hospitalizedStyle = {
   color: "#57C2FF",
   cursor: "pointer",
   border: "none",
};
const ongoingExaminationStyle = {
   color: "#55EDFF",
   cursor: "pointer",
   border: "none",
};

const mountPatientToCell = (
   patient,
   ongoingTreatmentCss,
   hospitalizedCss,
   ongoingExaminationCss,
   tableCss
) => {
   if (patient === "Ongoing Treatment")
      return <Table.Cell style={ongoingTreatmentCss}>{patient}</Table.Cell>;
   else if (patient === "Hospitalized")
      return <Table.Cell style={hospitalizedCss}>{patient}</Table.Cell>;
   else if (patient === "On going examination")
      return <Table.Cell style={ongoingExaminationCss}>{patient}</Table.Cell>;
   else return <Table.Cell style={tableCss}>{patient} </Table.Cell>;
};

const TableComponent = ({ tableData }) => {
   return (
      <Table style={tableContainerStyle} celled striped selectable>
         <Table.Header>
            <Table.Row>
               {Object.keys(tableData[0]).map((title) => {
                  return (
                     <Table.HeaderCell style={tableCell}>
                        {title}
                     </Table.HeaderCell>
                  );
               })}
            </Table.Row>
         </Table.Header>
         <Table.Body>
            {tableData.map((item) => {
               //console.log(item);

               return (
                  <Table.Row>
                     {Object.values(item).map((patientDetails) => {
                        return mountPatientToCell(
                           patientDetails,
                           ongoingTreatmentStyle,
                           hospitalizedStyle,
                           ongoingExaminationStyle,
                           tableStyle
                        );
                     })}
                  </Table.Row>
               );
            })}
         </Table.Body>
      </Table>
   );
};

export default TableComponent;