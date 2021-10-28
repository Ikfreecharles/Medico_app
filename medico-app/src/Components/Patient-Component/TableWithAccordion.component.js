//imports from external libraries
import { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import { LinearProgress } from "@mui/material";
import styled from "styled-components";

//imports from within the project
import TableComponent from "../Dashboard-Component/Table.component";
import { ActivitiesGoal } from "../../Redux/ActivitiesGoals.data";

const tableStyling = {
   fontFamily: "var(--main-font)",
   color: "var(--main-grey)",
   fontSize: "var(--main-fontsize)",
   fontWeight: "500",
   paddingRight: "1rem",
   // display: "flex",
   // alignItems: "center",
   // justifyContent: "space-between",
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
   state = { activeIndex: 0 };

   handleClick = (e, titleProps) => {
      const { index } = titleProps;
      const { activeIndex } = this.state;
      const newIndex = activeIndex === index ? -1 : index;

      this.setState({ activeIndex: newIndex });
   };

   render() {
      const { activeIndex } = this.state;
      return (
         <Accordion>
            {ActivitiesGoal.map((activities) => {
               const { id, Activity, ActivitySince, Progress, Goals } =
                  activities;
               return (
                  <AccordianDiv key={id} progress={Progress}>
                     <Accordion.Title
                        onClick={this.handleClick}
                        index={id}
                        active={activeIndex === id}
                        style={tableStyling}
                     >
                        <div className="progress__div">
                           <div>
                              <Icon name="dropdown" /> {Activity}
                           </div>

                           <div>
                              {Progress >= 100
                                 ? "Activity Completed"
                                 : `${Progress}%`}
                           </div>
                        </div>
                        <LinearProgress
                           variant="determinate"
                           value={Progress}
                        />
                        <div style={{ color: "var(--main-lightgrey)" }}>
                           Started: {ActivitySince}
                        </div>
                     </Accordion.Title>
                     <Accordion.Content active={activeIndex === id}>
                        <div style={{ marginBottom: "2rem" }}>
                           <TableComponent tableData={Goals} />
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
