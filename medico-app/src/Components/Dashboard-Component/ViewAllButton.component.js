import { Link } from "react-router-dom";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import styled from "styled-components";

const ViewAllButtonContainer = styled.button`
   color: ${(props) => props.color};
   font-size: 12px;
   display: flex;
   align-items: center;
   padding: 1rem 1.5rem;
   border: none;
   cursor: pointer;
   background-color: ${(props) => props.backgroundcolor};
   border-radius: 3px;
   ${(props) =>
      props.outline &&
      `
   border: 1px solid #000;
   background: none;
   `}

   p {
      color: ${(props) => props.color};
   }
`;

const ViewAllButton = ({
   color,
   link,
   backgroundcolor,
   text,
   icon,
   outline,
}) => {
   return link ? (
      <Link to={`/${link}`}>
         <ViewAllButtonContainer
            color={color}
            backgroundcolor={backgroundcolor}
            outline={outline}
         >
            <p style={{ margin: "0" }}>{text}</p>
            {icon && <ArrowRightAltRoundedIcon />}
         </ViewAllButtonContainer>
      </Link>
   ) : (
      <ViewAllButtonContainer
         color={color}
         backgroundcolor={backgroundcolor}
         outline={outline}
      >
         <p style={{ margin: "0" }}>{text}</p>
         {icon && <ArrowRightAltRoundedIcon />}
      </ViewAllButtonContainer>
   );
};

export default ViewAllButton;
