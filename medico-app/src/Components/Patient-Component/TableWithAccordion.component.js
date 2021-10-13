import { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import TableComponent from "../Dashboard-Component/Table.component";
import { ActivitiesGoal } from "../../Redux/ActivitiesGoals.data";

const tableStyling = {
   fontFamily: "Work Sans",
   fontWeight: "500",
   paddingLeft: "0",
};

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
               const { id, Activity, Progress, goals } = activities;
               return (
                  <div key={id}>
                     <Accordion.Title
                        onClick={this.handleClick}
                        index={id}
                        active={activeIndex === id}
                        style={tableStyling}
                     >
                        <div>
                           <Icon name="dropdown" /> {Activity} {Progress}
                        </div>
                     </Accordion.Title>
                     <Accordion.Content active={activeIndex === id}>
                        <TableComponent tableData={goals} />
                     </Accordion.Content>
                  </div>
               );
            })}
         </Accordion>
      );
   }
}

export default TableWithAccordionComponent;
