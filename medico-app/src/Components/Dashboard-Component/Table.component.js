//imports from external libraries
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
import { Alert, AlertTitle, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { LinearProgress } from "@mui/material";

//imports from within the project
import { handleTableCellRender } from "../../Utils/TableFunctions.utils";

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
      div {
         div {
            font-size: 1.2rem;
            p {
               font-size: 1.2rem;
               margin-bottom: 0;
            }
         }
      }
   }
`;

const TableComponent = ({ tableHeading, tableBody }) => {
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(7);

   const handleChangePage = (event, newPage) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
   };

   if (tableBody.length <= 0)
      return (
         <Alert severity="info">
            <AlertTitle>No Data</AlertTitle>
            There is no data to display
         </Alert>
      );
   return (
      <TableOuterDiv>
         <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
               <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                     <TableRow>
                        {tableHeading.map((patient) => {
                           const { id, title } = patient;
                           return (
                              <TableCell sx={tableStyle} key={id}>
                                 {title}
                              </TableCell>
                           );
                        })}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {tableBody
                        .slice(
                           page * rowsPerPage,
                           page * rowsPerPage + rowsPerPage
                        )
                        .map((patient) => {
                           return (
                              <TableRow hover key={patient.id}>
                                 {tableHeading
                                    .filter(
                                       (item) =>
                                          item !== "id" && item !== "__typename"
                                    )
                                    .map((heading) => {
                                       const item = patient[heading.code];
                                       return (
                                          <TableCell
                                             sx={tableStyle}
                                             key={heading.id}
                                          >
                                             {handleTableCellRender(
                                                heading.code,
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

            {/* Table pagination */}
            {tableBody.length > 10 && (
               <TablePagination
                  rowsPerPageOptions={[7, 25, 100]}
                  component="div"
                  count={tableBody.length}
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
