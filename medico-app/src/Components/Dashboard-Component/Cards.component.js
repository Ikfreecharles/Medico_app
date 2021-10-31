//imports from external libraries
import styled from "styled-components";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

//import from external libraries
// import ViewAllButton from "./ViewAllButton.component";

const CardContainer = styled.div`
   background-color: ${(props) => props.backgroundcolor};
   width: ${(props) => props.width};
   padding: 2rem 0 2rem 2rem;
   border-radius: var(--border-radius);
   position: relative;
   color: ${(props) => props.textcolor};
`;

const Title = styled.h2`
   font-size: 2rem;
   padding: 0;
   margin: 0;
   font-weight: 600;
   line-height: 2.2rem;
`;
const Subtitle = styled.p`
   font-size: 1.3rem;
   font-weight: 500;
   padding: 0;
   margin: 0;
   letter-spacing: -0.4px;
`;

const ChangeDiv = styled.div`
   display: flex;
   align-items: center;
   color: #c2c2c2;
`;

const ChangeInfo = styled.p`
   font-size: 0.9rem;
   margin-left: 0.5rem;
`;

const IconContainer = styled.div`
   min-width: 3.5rem;
   height: 3.5rem;
   border-radius: 50%;
   background-color: ${(props) => props.iconcolor};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 0.5rem;
`;

const Icon = styled.img`
   width: 2rem;
`;

// const ViewAllButtonContainer = styled.div`
//    display: flex;
//    justify-content: right;
//    padding: 0;
// `;

const Cards = ({
   title,
   subtitle,
   icon,
   backgroundcolor,
   textcolor,
   width,
   changeInfo,
   changeDirection,

   iconcolor,
}) => {
   return (
      <CardContainer
         textcolor={textcolor}
         width={width}
         backgroundcolor={backgroundcolor}
      >
         <div style={{ display: "flex", padding: "0", alignItems: "top" }}>
            <IconContainer iconcolor={iconcolor}>
               <Icon src={icon} alt={subtitle} />
            </IconContainer>
            <div>
               <Title>{title}</Title>
               <Subtitle>{subtitle}</Subtitle>
               <ChangeDiv>
                  {changeDirection === 1 && (
                     <TrendingUpIcon
                        style={{
                           color: "var(--main-green)",
                           fontSize: "1.8rem",
                        }}
                     />
                  )}
                  {changeDirection === 0 && (
                     <TrendingDownIcon
                        style={{ color: "var(--main-red)", fontSize: "1.8rem" }}
                     />
                  )}
                  <ChangeInfo>{changeInfo}</ChangeInfo>
               </ChangeDiv>
            </div>
         </div>

         {/* <ViewAllButtonContainer>
            <ViewAllButton
               color={"var(--main-white)"}
               link={link}
               backgroundcolor={"var(--main-blue)"}
               text={"View all".toUpperCase()}
               icon={true}
            />
         </ViewAllButtonContainer> */}
      </CardContainer>
   );
};

export default Cards;
