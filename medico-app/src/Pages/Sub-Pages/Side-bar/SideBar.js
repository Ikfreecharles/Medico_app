import { Link } from "react-router-dom";
import styled from "styled-components";
import { SideBarItem } from "../../../Redux/SideBarItem";
import SVG from "react-inlinesvg";

const SideBarTitle = styled.section`
   width: 225px;
   height: 100vh;
   padding-top: 60px;
   cursor: default;
   position: fixed;
`;

const OuterContainer = styled.div`
   display: flex;
   align-items: center;
   margin-left: 40px;
   font-size: 1.1rem;
   font-weight: 800;
   transition: background 0.5s ease-in;

   &:hover {
      background: rgb(0, 156, 244);
      background: linear-gradient(
         90deg,
         rgba(0, 156, 244, 0) 3%,
         rgba(0, 156, 244, 1) 100%
      );
      border-radius: 0 50px 50px 0;
      color: #92d7ff;
   }
`;

const MenuItem = styled.p`
   padding: 1.3rem 0;
   margin-left: 30px;
`;

const SideBar = () => {
   return (
      <SideBarTitle>
         {SideBarItem.map((item) => {
            const { id, icon, title } = item;
            return (
               <Link to={`/${title}`} key={id}>
                  <OuterContainer>
                     <SVG
                        src={icon}
                        style={{ width: "20px", height: "20px" }}
                     />
                     <MenuItem>{title}</MenuItem>
                  </OuterContainer>
               </Link>
            );
         })}
      </SideBarTitle>
   );
};

export default SideBar;
