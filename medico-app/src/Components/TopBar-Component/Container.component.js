//imports from external libraries
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch } from "react-redux";

const ContainerComponent = ({ action, children }) => {
   const dispatch = useDispatch();

   return (
      <OutsideClickHandler
         onOutsideClick={() => {
            dispatch(action());
         }}
      >
         {children}
      </OutsideClickHandler>
   );
};

export default ContainerComponent;
