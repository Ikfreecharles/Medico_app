//import external libraries
import styled from "styled-components";

const SubmenuContainerdiv = styled.div`
   width: 100%;
   border-bottom: 1px solid #e8e8e8;
   padding: 0 !important;
`;

const SubmenuContainerInnerdiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: ${(props) => props.width};
   padding: 0 !important;
`;

const SubmenuItem = styled.p`
   color: rgba(94, 110, 194, 0.4);
   text-transform: uppercase;
   font-weight: 600;
   transition: all 0.2s ease-in;
   cursor: pointer;
   margin: 0;
   padding-bottom: 0.5rem;
   &:hover {
      color: rgba(53, 93, 207, 1);
   }
`;

const Submenu = ({ submenulist, width, setState }) => {
   return (
      <SubmenuContainerdiv>
         <SubmenuContainerInnerdiv width={width}>
            {submenulist ? (
               submenulist.map((list) => {
                  const { id, title } = list;
                  return (
                     <SubmenuItem
                        key={id}
                        onClick={(e) => setState(e.target.innerHTML)}
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
