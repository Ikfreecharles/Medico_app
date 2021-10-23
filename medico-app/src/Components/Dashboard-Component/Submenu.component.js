//import external libraries
import { useState } from "react";
import styled from "styled-components";

const SubmenuContainerdiv = styled.nav`
   width: 100%;
   padding: 0;
   margin-bottom: 2rem;
   overflow-x: auto;
   visibility: hidden;

   &::-webkit-scrollbar {
      height: 1px;
   }
   &::-webkit-scrollbar-track {
      box-shadow: none;
      background: none;
   }
   &::-webkit-scrollbar-thumb {
      background: none;
   }

   &:hover,
   &:focus {
      visibility: visible;
   }
`;

const SubmenuContainerInnerdiv = styled.ul`
   display: flex;
   align-items: center;
   width: ${(props) => props.width};
   padding: 0 !important;
   visibility: visible;
`;

const SubmenuItem = styled.li`
   color: rgba(71, 159, 218, 0.4);
   text-transform: uppercase;
   font-weight: 600;
   transition: all 0.2s ease-in;
   cursor: pointer;
   margin: 0 2rem 0 0;
   padding: 0.4rem 0.8rem;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   list-style-type: none;

   &.activeTabStyle {
      background-color: rgba(71, 159, 218, 0.16);
      color: rgb(71, 159, 218);
      border-radius: 5px;
   }
   &:hover {
      color: rgb(71, 159, 218);
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
         <SubmenuContainerInnerdiv>
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
