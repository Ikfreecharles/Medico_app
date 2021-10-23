//imports from external libraries
import { Feed } from "semantic-ui-react";
import Chip from "@mui/material/Chip";
import ChipComponent from "./Chip.component";

const feedSummary = {
   marginBottom: "0.5rem",
   color: "var(--main-grey)",
   fontWeight: "500",
};

const feedContent = {
   borderBottom: "1px solid #E8E8E8",
   paddingBottom: "1rem",
};

const ActivityFeed = ({ activitysummary, activitydate, activityType }) => {
   return (
      <Feed>
         <Feed.Event>
            <Feed.Content style={feedContent}>
               <Feed.Summary style={feedSummary}>
                  {activitysummary}
               </Feed.Summary>
               <Feed.Date>{activitydate}</Feed.Date>
               {activityType.map((type) => {
                  const { marker, activityType } = type;
                  return (
                     <ChipComponent
                        chiptext={activityType}
                        chipcolor={marker}
                     />
                  );
               })}
            </Feed.Content>
         </Feed.Event>
      </Feed>
   );
};

export default ActivityFeed;
