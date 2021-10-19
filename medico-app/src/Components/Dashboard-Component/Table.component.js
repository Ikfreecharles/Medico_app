import { useState } from "react";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { LinearProgress } from "@mui/material";

const tableStyle = {
   fontFamily: "Work Sans",
   fontSize: "1rem",
   letterSpacing: "-0.3px",
   fontWeight: "500",
};

const TableOuterDiv = styled.section`
   div {
      div {
         table {
            tbody {
               tr {
                  td {
                     span {
                        .css-5xe99f-MuiLinearProgress-bar1 {
                           background-color: #306ef6;
                           border-radius: 10px;
                        }
                     }
                  }
               }
            }
         }
      }
   }
`;

const TableComponent = ({ tableData }) => {
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(10);

   const handleChangePage = (event, newPage) => {
      event.preventDefault();
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
   };

   const handleTableCellRender = (
      heading,
      item,
      Component,
      Pie,
      Box,
      Typo,
      ProgressBar,
      styling
   ) => {
      if (heading === "Test" || heading === "Status") {
         return (
            <Component sx={styling}>
               <Box sx={{ position: "relative", display: "inline-flex" }}>
                  <Pie
                     variant="determinate"
                     value={item}
                     sx={
                        item < 41
                           ? { color: "#DA615C" }
                           : item < 70
                           ? { color: "#EBB47E" }
                           : item <= 100
                           ? { color: "#5DC58F" }
                           : ""
                     }
                  />
                  <Box
                     sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                     }}
                  >
                     <Typo
                        variant="caption"
                        component="div"
                        sx={styling}
                     >{`${item}%`}</Typo>
                  </Box>
               </Box>
            </Component>
         );
      }
      if (heading === "Recovery") {
         return (
            <Component>
               <ProgressBar
                  variant="determinate"
                  value={item}
                  sx={{ backgroundColor: "#ECECEC", borderRadius: "10px" }}
               />
            </Component>
         );
      }
      if (heading === "Examination") {
         return (
            <Component
               sx={
                  item.marker === 1
                     ? { color: "#306EF6" }
                     : item.marker === 2
                     ? { color: "#009CF4" }
                     : item.marker === 3
                     ? { color: "#5DC58F" }
                     : ""
               }
            >
               <p style={styling}>{item.item}</p>
            </Component>
         );
      } else {
         return <Component sx={styling}>{item}</Component>;
      }
   };

   return (
      <TableOuterDiv>
         <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
               <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                     <TableRow>
                        {Object.keys(tableData.at(0)).map((patient) => (
                           <TableCell sx={tableStyle}>{patient}</TableCell>
                        ))}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {tableData
                        .slice(
                           page * rowsPerPage,
                           page * rowsPerPage + rowsPerPage
                        )
                        .map((patient) => {
                           return (
                              <TableRow hover key={patient.id}>
                                 {Object.keys(tableData.at(0)).map(
                                    (heading) => {
                                       const item = patient[heading];
                                       return handleTableCellRender(
                                          heading,
                                          item,
                                          TableCell,
                                          CircularProgress,
                                          Box,
                                          Typography,
                                          LinearProgress,
                                          tableStyle
                                       );
                                    }
                                 )}
                              </TableRow>
                           );
                        })}
                  </TableBody>
               </Table>
            </TableContainer>
            <TablePagination
               rowsPerPageOptions={[10, 25, 100]}
               component="div"
               count={Object.values(tableData).length}
               rowsPerPage={rowsPerPage}
               page={page}
               onPageChange={handleChangePage}
               onRowsPerPageChange={handleChangeRowsPerPage}
            />
         </Paper>
      </TableOuterDiv>
   );
};

export default TableComponent;
