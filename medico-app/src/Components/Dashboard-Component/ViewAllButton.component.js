import { Link } from "react-router-dom";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import styled from "styled-components";

const ViewAllButtonContainer = styled.button`
   color: ${(props) => props.color};
   font-size: 12px;
   display: flex;
   align-items: center;
   padding: 0.5rem 1rem;
   background-color: ${(props) => props.backgroundcolor};
   border: none;
   cursor: pointer;
   border-radius: 10px;
`;

const ViewAllButton = ({ color, link, backgroundcolor }) => {
   return (
      <Link to={`${link}`}>
         <ViewAllButtonContainer
            color={color}
            backgroundcolor={backgroundcolor}
         >
            <p style={{ margin: "0" }}>View All</p>
            <ArrowRightAltRoundedIcon />
         </ViewAllButtonContainer>
      </Link>
   );
};

export default ViewAllButton;
