//import from external libraries
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

//import from within the project
import IconComponent from "../../../Components/Icon.component";
import { SideBarItem } from "../../../Redux/SideBarItem";
import { topbarTitleChange } from "../../../Redux/Top-bar/Topbar.actions";

const SideBarTitle = styled.section`
   width: auto;
   height: 100vh;
   padding-top: 60px;
   cursor: pointer;
`;

const OuterContainer = styled.div`
   display: flex;
   align-items: center;
   margin-left: 5px;
   font-size: 1.1rem;
   transition: background 1s ease-in;
   height: 4rem;

   &:hover {
      background: rgb(0, 156, 244);
      background: linear-gradient(
         90deg,
         rgba(255, 255, 255, 0) 3%,
         rgba(238, 238, 238, 1) 100%
      );
      border-radius: 0 1.5rem 1.5rem 0;
   }
`;

//use the toggle state to change the display of the side bar
const MenuItem = styled.p`
   padding: 1.3rem 1.3rem 1.3rem 0;
   margin-left: 1.2rem;
   ${(props) => props.toggleHamburger && `display : none;`};
   transition: all 1s ease-in;
   font-weight: 600;
`;

const SideBar = () => {
   //call useDispatch hook to dispatch the topbarActionAction to change the title
   const dispatch = useDispatch();

   //call useSelector hook to get the state of the hamburger from the redux store
   const toggleHamburger = useSelector(
      (state) => state.hamburger.HamburgerToggle
   );

   return (
      <SideBarTitle>
         {SideBarItem.map((item) => {
            const { id, icon, title } = item;

            return (
               <Link to={`/${title}`} key={id}>
                  <OuterContainer
                     onClick={() => dispatch(topbarTitleChange(title))}
                  >
                     <div style={{ padding: "0 1rem" }}>
                        <IconComponent
                           icon={icon}
                           backgroundcolor={"#E5E5E5"}
                        />
                     </div>
                     <MenuItem toggleHamburger={toggleHamburger}>
                        {title}
                     </MenuItem>
                  </OuterContainer>
               </Link>
            );
         })}
      </SideBarTitle>
   );
};

// const mapDispatchToState = (dispatch) => ({
//    topbarAction: (title) => {
//       dispatch(topbarAction(title));
//    },
// });

export default SideBar;
