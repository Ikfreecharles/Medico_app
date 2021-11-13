import styled from "styled-components";
import Box from "@mui/material/Box";
import { CircularProgress, Typography } from "@mui/material";
import { LinearProgress } from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const NoAvatarDiv = styled.div`
   min-width: 2.5rem;
   height: 2.5rem;
   color: var(--main-white);
   border-radius: 50% !important;
   background-color: var(--main-green);
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 0.6rem;
`;
const Priority = styled.p`
   color: var(--light-grey);
   ${(props) => props.item === "High" && `color: var(--main-red)`};
   ${(props) => props.item === "Medium" && `color: var(--main-orange)`};
   ${(props) => props.item === "Low" && `color: var(--main-blue)`};
`;
const Examination = styled.p`
   color: var(--light-grey);
   ${(props) => props.item === 1 && `color: var(--main-blue)`};
   ${(props) => props.item === 2 && `color: var(--main-orange)`};
   ${(props) => props.item === 3 && `color: var(--main-green)`};
`;
const TestStatus = styled.div`
   div {
      position: relative;
      display: inline-flex;

      span {
         ${(props) =>
            props.item < 41
               ? `color: var(--main-red)`
               : props.item < 70
               ? `color: var(--main-orange)`
               : props.item <= 100
               ? `color: var(--main-green)`
               : `"color: none"`};
      }
      div {
         top: 0;
         left: 0;
         bottom: 0;
         right: 0;
         position: absolute;
         display: flex;
         align-items: center;
         justify-content: center;
         div {
            font-family: var(--main-font);
            font-size: 1rem;
            letter-spacing: 0;
            fontweight: 500;
            color: var(--main-grey);
         }
      }
   }
`;

//function to handle the generation and styliing of the table cells
export const handleTableCell = (
   heading,
   item,

   dispatch,
   action,
   handleClick,
   patientId,
   setState,
   state
) => {
   if (heading === "test" || heading === "status") {
      return (
         <TestStatus item={item}>
            <Box>
               <CircularProgress variant="determinate" value={item} />
               <Box>
                  <Typography
                     variant="caption"
                     component="div"
                  >{`${item}%`}</Typography>
               </Box>
            </Box>
         </TestStatus>
      );
   }
   if (heading === "patientName") {
      return (
         <div style={{ display: "flex", alignItems: "center" }}>
            {item.userAvatar ? (
               <img
                  src={item.userAvatar}
                  alt={item}
                  style={{ marginRight: "0.3rem", minWidth: "2.2rem" }}
               />
            ) : (
               <NoAvatarDiv>{`${item.charAt(0).toUpperCase()}`}</NoAvatarDiv>
            )}
            <p>{item}</p>
         </div>
      );
   }
   if (heading === "recovery") {
      return (
         <LinearProgress
            variant="determinate"
            value={item}
            sx={{
               backgroundColor: "var(--light-grey)",
               borderRadius: "10px",
            }}
         />
      );
   }
   if (heading === "examination") {
      return (
         <Examination item={item.marker}>
            {item.examination ? item.examination : "No examination"}
         </Examination>
      );
   }
   if (heading === "patientAge") {
      return <p>{`${item} years`}</p>;
   }
   if (heading === "priority")
      return <Priority item={item}>{item ? item : "No info"}</Priority>;
   if (heading === "edit") {
      return (
         <MoreHorizRoundedIcon
            onClick={() =>
               handleClick(patientId, dispatch, setState, state, action)
            }
            style={{ cursor: "pointer" }}
         />
      );
   } else {
      return (
         <p>{item}</p> || <p style={{ color: "var(--light-grey)" }}>No info</p>
      );
   }
};

//function to generate new custom body from the data
export const generateBody = (data, moment, getAge) => {
   const patientName =
      data.firstName && data.lastName && `${data.firstName} ${data.lastName}`;
   const patientAdmittedDate =
      data.admittedDate && moment(data.admittedDate, "YYYY-MM-DD").fromNow();
   const patientAge = data.dob && getAge(data.dob);
   const { firstName, lastName, admittedDate, dob, ...otherData } = data;
   return {
      ...otherData,
      patientName,
      patientAdmittedDate,
      patientAge,
   };
};

//function to handle edit click on the table
export const handlePatientEditClick = (
   tableId,
   dispatch,
   setState,
   state,
   action
) => {
   setState((state) => (state = tableId));
   dispatch(action());
};
