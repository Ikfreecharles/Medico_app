//imports from external libraries
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

//imports from within the project
import { hamburgerToggle } from "../../Redux/Hamburger/Hamburger.actions";

const HamburgerAndHeadingContainer = styled.div`
   display: flex;
   align-items: center;
`;

const Heading = styled.h1`
   font-size: 2.2rem;
   font-weight: 700;
   letter-spacing: -0.7px;
   margin: 0;
   margin-left: 1rem;
`;

const HamburgerAndHeading = ({ heading }) => {
   //call the useDispatch hook to change the state of the hamburger
   const dispatch = useDispatch();

   return (
      <HamburgerAndHeadingContainer>
         <div
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(hamburgerToggle())}
         >
            <Icon name="bars" size="big" />
         </div>
         <Heading>{heading}</Heading>
      </HamburgerAndHeadingContainer>
   );
};

export default HamburgerAndHeading;
