import { Feed } from "semantic-ui-react";

const feedSummary = {
   marginBottom: "0.5rem",
   color: "#797979",
};

const feedContent = {
   borderBottom: "1px solid #E8E8E8",
   paddingBottom: "1rem",
};

const ActivityFeed = ({ activitysummary, activitydate }) => {
   return (
      <Feed>
         <Feed.Event>
            <Feed.Content style={feedContent}>
               <Feed.Summary style={feedSummary}>
                  {activitysummary}
               </Feed.Summary>
               <Feed.Date>{activitydate}</Feed.Date>
            </Feed.Content>
         </Feed.Event>
      </Feed>
   );
};

export default ActivityFeed;
