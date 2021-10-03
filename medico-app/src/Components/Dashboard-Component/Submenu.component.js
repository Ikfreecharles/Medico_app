//import external libraries
import styled from "styled-components";
import { Link } from "react-router-dom";

const SubmenuContainerdiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 3rem;
`;

const SubmenuItem = styled.p`
   color: rgba(94, 110, 194, 0.4);
   text-transform: uppercase;
   transition: all 0.2s ease-in;
   cursor: pointer;
   margin: 0;
   font-size: 1.1rem;
   &:hover {
      color: rgba(53, 93, 207, 1);
      border-radius: 3rem;
      background-color: rgba(53, 93, 207, 0.2);
      padding: 1rem 1.6rem;
   }
`;

const Submenu = ({ submenulist, path, subpath }) => {
   const { id, menutitle } = submenulist;
   return (
      <SubmenuContainerdiv>
         {menutitle.map((list, index) => {
            return (
               <Link to={id ? `${path}/${subpath}/${list}` : ""} key={index}>
                  <SubmenuItem> {list}</SubmenuItem>
               </Link>
            );
         })}
      </SubmenuContainerdiv>
   );
};

export default Submenu;
