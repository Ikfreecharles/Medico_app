//imports from external libraries
import styled from "styled-components";

//imports from within the project

const ProfileModalContainer = styled.div`
   position: absolute;
   right: 2rem;
   top: 6rem;
   border-radius: var(--border-radius);
   background-color: var(--main-white);
   padding: 1rem 2rem;
   z-index: 999;
`;

const ProfileModal = () => {
   return (
      <ProfileModalContainer>
         <p>Settings</p>
         <p>Sign out</p>
      </ProfileModalContainer>
   );
};

export default ProfileModal;
