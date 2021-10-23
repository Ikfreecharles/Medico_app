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
   fontFamily: "var(--main-font)",
   fontSize: "1rem",
   letterSpacing: "0",
   fontWeight: "500",
   color: "var(--main-grey)",
};

const TableOuterDiv = styled.section`
   div {
      box-shadow: none;
      border-radius: 3px;
      div {
         table {
            thead {
               tr {
                  th {
                     padding-left: 4px;
                     background-color: #f9f9f9;
                     border-left: 1px solid #f5f5f5;
                     border-bottom: none;
                     font-size: 1.05rem;
                     font-weight: 600;
                     color: var(--main-grey);
                  }
               }
            }
            tbody {
               tr {
                  td {
                     padding: 4px;
                     border-bottom: 1px solid var(--light-grey);
                     color: var(--main-grey);
                     div {
                        span {
                           background: none;
                        }
                     }
                     span {
                        .css-5xe99f-MuiLinearProgress-bar1 {
                           background-color: #479fda;
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
      Pie,
      Box,
      Typo,
      ProgressBar,
      styling
   ) => {
      if (heading === "Test" || heading === "Status") {
         return (
            <Box sx={{ position: "relative", display: "inline-flex" }}>
               <Pie
                  variant="determinate"
                  value={item}
                  sx={
                     item < 41
                        ? { color: "var(--main-red)" }
                        : item < 70
                        ? { color: "var(--main-orange)" }
                        : item <= 100
                        ? { color: "var(--main-green)" }
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
         );
      }
      if (heading === "Patient") {
         return (
            <div style={{ display: "flex", alignItems: "center" }}>
               <img
                  src={item.Useravatar}
                  alt={item}
                  style={{ marginRight: "0.3rem", width: "2.2rem" }}
               />
               <p>{item.Patient}</p>
            </div>
         );
      }
      if (heading === "Recovery") {
         return (
            <ProgressBar
               variant="determinate"
               value={item}
               sx={{
                  backgroundColor: "var(--light-grey)",
                  borderRadius: "10px",
               }}
            />
         );
      }
      if (heading === "Examination" || heading === "Priority") {
         return (
            <p
               style={
                  item.marker === 1
                     ? { color: "var(--main-blue)" }
                     : item.marker === 2
                     ? { color: "var(--main-orange)" }
                     : item.marker === 3
                     ? { color: "var(--main-green)" }
                     : ""
               }
            >
               {item.item || item.Priority}
            </p>
         );
      } else {
         return item;
      }
   };

   return (
      <TableOuterDiv>
         <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
               <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                     <TableRow>
                        {Object.keys(tableData.at(0))
                           .filter((item) => item !== "id")
                           .map((patient) => (
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
                                 {Object.keys(tableData.at(0))
                                    .filter((item) => item !== "id")
                                    .map((heading) => {
                                       const item = patient[heading];
                                       return (
                                          <TableCell sx={tableStyle}>
                                             {handleTableCellRender(
                                                heading,
                                                item,
                                                CircularProgress,
                                                Box,
                                                Typography,
                                                LinearProgress,
                                                tableStyle
                                             )}
                                          </TableCell>
                                       );
                                    })}
                              </TableRow>
                           );
                        })}
                  </TableBody>
               </Table>
            </TableContainer>
            {tableData.length >= 10 && (
               <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={Object.values(tableData).length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
               />
            )}
         </Paper>
      </TableOuterDiv>
   );
};

export default TableComponent;
