import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
import styled from "styled-components";

const SnackbarDiv = styled.div`
   div {
      div {
         box-shadow: none;
         div {
            svg {
               font-size: 2.8rem;
            }
         }
         font-family: var(--main-font);
         font-size: 1.3rem;
         margin: 0 0.5rem 0 0;
         p {
            font-size: 1rem;
         }
         button {
            svg {
               font-size: 1.8rem;
            }
         }
      }
   }
`;

const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertPopupComponent = ({
   isOpen,
   severity,
   errorMessage,
   errorTitle,
}) => {
   const [open, setOpen] = React.useState(false);

   React.useEffect(() => {
      if (isOpen) setOpen(true);
   }, [isOpen]);

   const handleClose = (event, reason) => {
      if (reason === "clickaway") {
         return;
      }
      setOpen(false);
   };

   return (
      <SnackbarDiv>
         <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
         >
            <Alert
               onClose={handleClose}
               severity={severity}
               sx={{ width: "100%" }}
            >
               <AlertTitle>{errorTitle}</AlertTitle>
               <p>{errorMessage}</p>
            </Alert>
         </Snackbar>
      </SnackbarDiv>
   );
};
export default AlertPopupComponent;
