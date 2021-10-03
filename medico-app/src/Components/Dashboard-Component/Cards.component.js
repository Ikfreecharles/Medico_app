import styled from "styled-components";
import ViewAllButton from "./ViewAllButton.component";

const CardContainer = styled.div`
   background-color: #fff;
   color: ${(props) => props.textcolor};
   width: ${(props) => props.width};
   padding: 1.5rem;
   border: 1px solid #eee;
`;

const Title = styled.h2`
   font-size: 3rem;
   padding: 0;
   margin: 0;
   font-weight: 300;
`;
const Subtitle = styled.p`
   font-size: 1.2rem;
   padding: 0;
   margin: 0;
   opacity: 0.4;
   letter-spacing: -0.4px;
`;

const IconContainer = styled.div`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${(props) => props.backgroundcolor};
`;

const Icon = styled.img`
   width: 25px;
   top: 0.8rem;
   right: 0.8rem;
`;

const ViewAllButtonContainer = styled.div`
   margin-top: 60px;
   display: flex;
   justify-content: right;
`;

const Cards = ({
   title,
   subtitle,
   icon,
   backgroundcolor,
   textcolor,
   width,
}) => {
   return (
      <CardContainer textcolor={`${textcolor}`} width={`${width}`}>
         <div
            style={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "space-between",
            }}
         >
            <IconContainer backgroundcolor={backgroundcolor}>
               <Icon src={icon} />
            </IconContainer>

            <Title>{title}</Title>
         </div>
         <Subtitle>{subtitle}</Subtitle>
         <ViewAllButtonContainer>
            <ViewAllButton
               color={"#fff"}
               link={"/"}
               backgroundcolor={"#396CFF"}
            />
         </ViewAllButtonContainer>
      </CardContainer>
   );
};

export default Cards;
