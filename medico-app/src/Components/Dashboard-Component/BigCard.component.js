import styled from "styled-components";

const BigCardContainer = styled.div`
   width: ${(props) => props.width};
   background: ${(props) => props.backgroundcolor};
   border-radius: 30px;
   padding: 2rem;
   height: 350px;
`;

const FlexStat = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const Heading = styled.h2`
   font-size: 1.2rem;
   color: #fff;
   padding-bottom: 1.5rem;
`;

const CardNumber = styled.h2`
   font-size: 8rem;
   color: ${(props) => props.cardnumbercolor};
   margin: 0;
   line-height: 1;
`;

const Subtitle = styled.p`
   font-size: 1.3rem;
   color: ${(props) => props.cardpercentagesubtitlecolor};
`;

const CardPercentage = styled.p`
   font-size: 1.4rem;
   color: #fff;
   margin: 0;
`;

const CardPercentageSubtitle = styled.p`
   font-size: 1rem;
   color: ${(props) => props.cardpercentagesubtitlecolor};
`;

const BigCardChartContainer = styled.div`
   height: 150px;
   width: 100%;
`;

const BigCard = ({
   heading,
   cardnumber,
   subtitle,
   cardpercentage,
   cardpercentagesubtitle,
   cardnumbercolor,
   cardpercentagesubtitlecolor,
   width,
   backgroundcolor,
   bigcardchart,
}) => {
   return (
      <BigCardContainer backgroundcolor={backgroundcolor} width={width}>
         <div>
            <Heading>{heading}</Heading>
         </div>
         <FlexStat>
            <div>
               <CardNumber cardnumbercolor={cardnumbercolor}>
                  {cardnumber}
               </CardNumber>
               <Subtitle
                  cardpercentagesubtitlecolor={cardpercentagesubtitlecolor}
               >
                  {subtitle}
               </Subtitle>
            </div>
            <div>
               <CardPercentage>{cardpercentage}</CardPercentage>
               <CardPercentageSubtitle
                  cardpercentagesubtitlecolor={cardpercentagesubtitlecolor}
               >
                  {cardpercentagesubtitle}
               </CardPercentageSubtitle>
            </div>
         </FlexStat>
         <BigCardChartContainer>{bigcardchart}</BigCardChartContainer>
      </BigCardContainer>
   );
};

export default BigCard;
