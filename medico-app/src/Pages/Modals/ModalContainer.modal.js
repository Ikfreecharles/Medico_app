import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 636,
   maxHeight: 520,
   overflowY: "scroll",
   height: "auto",
   bgcolor: "background.paper",
   borderRadius: "var(--border-radius)",
};

const ModalContainer = ({ open, dispatch, actions, children }) => {
   return (
      <div>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={() => actions.map((action) => dispatch(action()))}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}
         >
            <Fade in={open}>
               <Box sx={style}>{children}</Box>
            </Fade>
         </Modal>
      </div>
   );
};

export default ModalContainer;
