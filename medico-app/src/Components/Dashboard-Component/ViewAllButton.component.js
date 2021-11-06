import { Link } from "react-router-dom";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import styled from "styled-components";

const ViewAllButtonContainer = styled.button`
   color: ${(props) => props.color};
   font-size: 12px;
   display: flex;
   align-items: center;
   padding: 1rem 2.5rem;
   border: none;
   cursor: pointer;
   font-family: var(--main-font);
   background-color: ${(props) => props.backgroundcolor};
   border-radius: 3px;
   ${(props) =>
      props.outline &&
      `
   border: 1px solid;
   border-color: ${(props) => props.outlinecolor};
   background: none;
   `}
`;

const ViewAllButton = ({
   color,
   link,
   backgroundcolor,
   text,
   icon,
   outline,
   outlinecolor,
   type,
}) => {
   return link ? (
      <Link to={`/${link}`}>
         <ViewAllButtonContainer
            color={color}
            backgroundcolor={backgroundcolor}
            outline={outline}
            outlinecolor={outlinecolor}
            type={type}
         >
            {text.toUpperCase()}
            {icon && <ArrowRightAltRoundedIcon />}
         </ViewAllButtonContainer>
      </Link>
   ) : (
      <ViewAllButtonContainer
         color={color}
         backgroundcolor={backgroundcolor}
         outline={outline}
         outlinecolor={outlinecolor}
         type={type}
      >
         {text.toUpperCase()}
         {icon && <ArrowRightAltRoundedIcon />}
      </ViewAllButtonContainer>
   );
};

export default ViewAllButton;
