import { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import TableComponent from "../Dashboard-Component/Table.component";
import { ActivitiesGoal } from "../../Redux/ActivitiesGoals.data";

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
                     >
                        <Icon name="dropdown" /> {Activity}
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
