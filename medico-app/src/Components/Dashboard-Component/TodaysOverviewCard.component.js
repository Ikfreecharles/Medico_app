//imports from external libraries
import styled from "styled-components";
import { LinearProgress } from "@mui/material";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";

//imports from within the project
import ViewAllButton from "./ViewAllButton.component";

const CardContainerDiv = styled.div`
   padding: 2rem;
   background-color: var(--main-white);
   border-radius: var(--border-radius);
   position: relative;
   .last__update {
      position: absolute;
      top: 0.8rem;
      right: 0.8rem;
      font-size: 0.7rem;
      color: var(--main-lightgrey);
   }
   .main__number {
      font-size: 2.5rem;
      margin: 0;
   }
   p {
      margin: 0 0 0.5rem 0;
   }
   .change__flex {
      display: flex;
      margin: 0.5rem 0;
      align-items: center;
      p {
         margin: 0;
      }
   }
`;

const LowerCardDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const ButtonContainer = styled.div`
   display: flex;
   button {
      margin-right: 1rem;
   }
`;

const Metadata = styled.div`
   h4 {
      margin: 0;
   }
   div {
      display: flex;
      align-items: center;
   }
`;

const ImgItem = styled.img`
   width: 2.5rem;
   height: 2.5rem;
   border-radius: 50%;
   background-color: var(--main-grey);
   border: 2px solid var(--main-white);
   margin-right: -1rem;
`;
const TodaysOverviewCardComponent = ({
   number,
   itemCompleted,
   totalItem,
   changePercentage,
}) => {
   return (
      <CardContainerDiv>
         <span className={"last__update"}>Last updated: 3 mins ago</span>
         <p className={"main__number"}>12</p>
         <p>Total Tasks</p>
         <p>10/12 completed</p>
         <LinearProgress variant={"determinate"} value={50} />
         <div className={"change__flex"}>
            <ArrowDropUpRoundedIcon color={"secondary"} fontSize={"large"} />
            <p>10% lower than yesterday</p>
         </div>
         <LowerCardDiv>
            <ButtonContainer>
               <ViewAllButton
                  color={"var(--main-white)"}
                  backgroundcolor={"var(--main-green)"}
                  text={"New task".toUpperCase()}
                  icon={true}
               />
               <ViewAllButton
                  color={"var(--main-white)"}
                  backgroundcolor={"var(--main-blue)"}
                  text={"View all".toUpperCase()}
                  icon={true}
               />
            </ButtonContainer>
            <Metadata>
               <h4>Waiting Patients</h4>
               <div>
                  <ImgItem />
                  <ImgItem />
                  <ImgItem />
                  <ImgItem />
                  <ImgItem />
                  <ImgItem />
                  <ImgItem />
               </div>
            </Metadata>
         </LowerCardDiv>
      </CardContainerDiv>
   );
};

export default TodaysOverviewCardComponent;
