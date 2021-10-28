//imports from external libraries
import styled from "styled-components";
import { Grid, GridColumn } from "semantic-ui-react";

//imports from within the project

import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import SelectFilterComponent from "../../../../Components/Dashboard-Component/SelectFilter.component";
import TodaysOverviewCardComponent from "../../../../Components/Dashboard-Component/TodaysOverviewCard.component";

const gridStyle = {
   padding: "0.4rem",
};

const TitleContainerDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0.8rem 0;
   .select__div {
      display: flex;
      align-items: center;
      .selectinput__div {
         margin-right: 1rem;
      }
   }
`;

const DashboardTodayoverview = () => {
   return (
      <div>
         <TitleContainerDiv>
            <Titles title={"Today's Overview"} color={"var(--main-grey)"} />
            <div className={"select__div"}>
               <div className={"selectinput__div"}>
                  <SelectFilterComponent
                     options={["Daily", "Weekly", "Monthly"]}
                  />
               </div>
               <Titles title={"25 Oct, 2021"} color={"var(--main-grey)"} />
            </div>
         </TitleContainerDiv>
         <Grid columns={3} style={{ margin: "0 -3px" }}>
            <GridColumn style={gridStyle} mobile={16} tablet={5} computer={8}>
               <TodaysOverviewCardComponent />
            </GridColumn>
            <GridColumn style={gridStyle} mobile={16} tablet={5} computer={8}>
               <TodaysOverviewCardComponent />
            </GridColumn>
         </Grid>
      </div>
   );
};

export default DashboardTodayoverview;
