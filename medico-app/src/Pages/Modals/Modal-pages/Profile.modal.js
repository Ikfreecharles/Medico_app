//imports from external libraries
import styled from "styled-components";
import ContainerComponent from "../../../Components/TopBar-Component/Container.component";

//imports from within the project
import { openProfileOption } from "../../../Redux/Modals/Modals.actions";

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

const ProfileModal = () => {
   return (
      <ContainerComponent action={openProfileOption}>
         <ContainerComponentDiv>
            <p>Settings</p>
            <p>Sign out</p>
         </ContainerComponentDiv>
      </ContainerComponent>
   );
};

export default ProfileModal;
