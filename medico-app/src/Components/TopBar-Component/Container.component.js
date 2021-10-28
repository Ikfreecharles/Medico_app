//imports from external libraries
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch } from "react-redux";

const ContainerComponentDiv = styled.div`
   position: absolute;
   right: 2rem;
   top: 6rem;
   border-radius: var(--border-radius);
   background-color: var(--main-white);
   padding: 1rem 1rem;
   z-index: 999;
   box-shadow: -4px 4px 11px -2px rgba(71, 159, 218, 0.11);
   -webkit-box-shadow: -4px 4px 11px -2px rgba(71, 159, 218, 0.11);
   -moz-box-shadow: -4px 4px 11px -2px rgba(71, 159, 218, 0.11);
`;

const ContainerComponent = ({ action, children }) => {
   const dispatch = useDispatch();

   return (
      <OutsideClickHandler
         onOutsideClick={() => {
            dispatch(action());
         }}
      >
         <ContainerComponentDiv>{children}</ContainerComponentDiv>
      </OutsideClickHandler>
   );
};

export default ContainerComponent;
