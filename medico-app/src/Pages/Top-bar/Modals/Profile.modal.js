//imports from external libraries
import ContainerComponent from "../../../Components/TopBar-Component/Container.component";

//imports from within the project
import { openProfileOption } from "../../../Redux/Top-bar/Topbar.actions";

const ProfileModal = () => {
   return (
      <ContainerComponent action={openProfileOption}>
         <p>Settings</p>
         <p>Sign out</p>
      </ContainerComponent>
   );
};

export default ProfileModal;
