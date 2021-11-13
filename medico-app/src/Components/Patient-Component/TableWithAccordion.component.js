//imports from external libraries
import { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import { LinearProgress } from "@mui/material";
import styled from "styled-components";

//imports from within the project
import TableComponent from "../Dashboard-Component/Table.component";
import { ActivitiesGoal } from "../../Redux/ActivitiesGoals.data";
import PatientAccordionContentActivitiesGoals from "../../Pages/Page/Patients/Patients-components/Patient-careplan/Patient-careplan-content/PatientAccordionContent.activitiesGoals";

const tableStyling = {
   fontFamily: "var(--main-font)",
   color: "var(--main-grey)",
   fontSize: "var(--main-fontsize)",
   fontWeight: "500",
   paddingRight: "1rem",
};

const AccordianDiv = styled.section`
   div {
      .progress__div {
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
      span {
         border-radius: 10px;
         background-color: var(--light-grey);
         span {
            ${(props) =>
               props.progress < 40 &&
               `
            background-color: var(--main-red);
            `}
            ${(props) =>
               props.progress >= 40 &&
               `
            background-color: var(--main-orange);
            `}
            ${(props) =>
               props.progress > 70 &&
               `
            background-color: var(--main-green);
            `}
         }
      }
   }
`;

class TableWithAccordionComponent extends Component {
   constructor(props) {
      super(props);

      this.state = { activeIndex: 0 };

      this.handleClick = (e, titleProps) => {
         const { index } = titleProps;
         const { activeIndex } = this.state;
         const newIndex = activeIndex === index ? -1 : index;

         this.setState({ activeIndex: newIndex });
      };
   }
   render() {
      const { activeIndex } = this.state;
      return (
         <Accordion>
            {this.props.data.activities.map((activities) => {
               const { id, activity, activitySince, progress, goals } =
                  activities;
               return (
                  <AccordianDiv key={id} progress={progress}>
                     <Accordion.Title
                        onClick={this.handleClick}
                        index={id}
                        active={activeIndex === id}
                        style={tableStyling}
                     >
                        <div className="progress__div">
                           <div>
                              <Icon name="dropdown" /> {activity}
                           </div>

                           <div>
                              {progress >= 100
                                 ? "Activity Completed"
                                 : `${progress}%`}
                           </div>
                        </div>
                        <LinearProgress
                           variant="determinate"
                           value={progress}
                        />
                        <div style={{ color: "var(--main-lightgrey)" }}>
                           Started: {activitySince}
                        </div>
                     </Accordion.Title>
                     <Accordion.Content active={activeIndex === id}>
                        <div style={{ marginBottom: "2rem" }}>
                           <PatientAccordionContentActivitiesGoals
                              data={goals}
                           />
                        </div>
                     </Accordion.Content>
                  </AccordianDiv>
               );
            })}
         </Accordion>
      );
   }
}

export default TableWithAccordionComponent;
