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
   tableCss,
   index
) => {
   if (patient === "Ongoing Treatment")
      return (
         <Table.Cell key={index} style={ongoingTreatmentCss}>
            {patient}
         </Table.Cell>
      );
   else if (patient === "Hospitalized")
      return (
         <Table.Cell key={index} style={hospitalizedCss}>
            {patient}
         </Table.Cell>
      );
   else if (patient === "On going examination")
      return (
         <Table.Cell key={index} style={ongoingExaminationCss}>
            {patient}
         </Table.Cell>
      );
   else
      return (
         <Table.Cell key={index} style={tableCss}>
            {patient}
         </Table.Cell>
      );
};

const TableComponent = ({ tableData }) => {
   return (
      <Table style={tableContainerStyle} celled striped selectable>
         <Table.Header>
            <Table.Row>
               {Object.keys(tableData[0]).map((title, index) => {
                  return (
                     <Table.HeaderCell style={tableCell} key={index}>
                        {title}
                     </Table.HeaderCell>
                  );
               })}
            </Table.Row>
         </Table.Header>
         <Table.Body>
            {tableData.map((item, index) => {
               //console.log(item);

               return (
                  <Table.Row key={index}>
                     {Object.values(item).map((patientDetails, index) => {
                        return mountPatientToCell(
                           patientDetails,
                           ongoingTreatmentStyle,
                           hospitalizedStyle,
                           ongoingExaminationStyle,
                           tableStyle,
                           index
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
