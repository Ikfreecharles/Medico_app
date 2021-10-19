import styled from "styled-components";
import SVG from "react-inlinesvg";

const IconComponentDiv = styled.div`
   border-radius: 10px;
   background-color: ${(props) => props.backgroundcolor};
   padding: 0.6rem;
   height: 2.8rem;
   width: 2.8rem;
   display: flex;
   align-item: center;
   justify-content: center;
   margin-right: 0.5rem;
`;

const IconComponent = ({ icon, backgroundcolor }) => {
   return (
      <IconComponentDiv backgroundcolor={backgroundcolor}>
         <SVG src={icon} style={{ width: "1.5rem", height: "1.5rem" }} />
      </IconComponentDiv>
   );
};

export default IconComponent;
