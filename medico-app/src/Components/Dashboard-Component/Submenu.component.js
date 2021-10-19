//import external libraries
import { useState } from "react";
import styled from "styled-components";

const SubmenuContainerdiv = styled.nav`
   width: 100%;
   padding: 0;
   margin-bottom: 2rem;
`;

const SubmenuContainerInnerdiv = styled.ul`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: ${(props) => props.width};
   padding: 0 !important;
`;

const SubmenuItem = styled.li`
   color: rgba(48, 110, 246, 0.4);
   text-transform: uppercase;
   font-weight: 600;
   transition: all 0.2s ease-in;
   cursor: pointer;
   margin: 0;
   padding: 0.4rem 1rem;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   list-style-type: none;

   &.activeTabStyle {
      background-color: rgba(48, 110, 246, 0.16);
      color: rgb(48, 110, 246);
      border-radius: 3rem;
   }
   &:hover {
      color: rgb(48, 110, 246);
   }
`;

const Submenu = ({ submenulist, width, setState }) => {
   const [activeTab, setActiveTab] = useState("1");

   const handleClick = (e, setState, id) => {
      e.preventDefault();
      setState(id);
      setActiveTab(id);
   };

   return (
      <SubmenuContainerdiv>
         <SubmenuContainerInnerdiv width={width}>
            {submenulist ? (
               submenulist.map((list) => {
                  const { id, title } = list;
                  return (
                     <SubmenuItem
                        key={id}
                        onClick={(e) => handleClick(e, setState, id)}
                        className={id === activeTab ? "activeTabStyle" : ""}
                     >
                        {title}
                     </SubmenuItem>
                  );
               })
            ) : (
               <h3>Loading</h3>
            )}
         </SubmenuContainerInnerdiv>
      </SubmenuContainerdiv>
   );
};

export default Submenu;
