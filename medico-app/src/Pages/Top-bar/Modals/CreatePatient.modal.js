import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CreatePatientForm from "../../../Components/Form-Component/Forms/CreatePatient.form";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 800,
   height: 500,
   bgcolor: "background.paper",
   borderRadius: "var(--border-radius)",
};

const CreatePatientModal = ({ open, dispatch, openCreatePatientModal }) => {
   return (
      <div>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={() => dispatch(openCreatePatientModal())}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}
         >
            <Fade in={open}>
               <Box sx={style}>
                  <CreatePatientForm />
               </Box>
            </Fade>
         </Modal>
      </div>
   );
};

export default CreatePatientModal;
