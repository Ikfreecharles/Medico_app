import styled from "styled-components";

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

const Submenu = ({ submenulist }) => {
   return (
      <SubmenuContainerdiv>
         {submenulist.map((list) => {
            return <SubmenuItem>{list}</SubmenuItem>;
         })}
      </SubmenuContainerdiv>
   );
};

export default Submenu;
