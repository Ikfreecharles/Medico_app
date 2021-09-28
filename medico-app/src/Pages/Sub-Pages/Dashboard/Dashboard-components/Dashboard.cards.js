import Cards from "../../../../Components/Dashboard-Component/Cards.component";
import { Grid } from "semantic-ui-react";
import { CardsData } from "../../../../Redux/CardsData";

const DashboardCardsContainer = () => {
   return (
      <Grid columns={4}>
         {CardsData.map((cardData) => {
            const {
               id,
               total,
               subtitle,
               backgroundcolor,
               textcolor,
               width,
               icon,
            } = cardData;
            return (
               <Grid.Column key={id} mobile={16} tablet={8} computer={4}>
                  <Cards
                     title={total}
                     subtitle={subtitle}
                     icon={icon}
                     backgroundcolor={backgroundcolor}
                     textcolor={textcolor}
                     width={width}
                  />
               </Grid.Column>
            );
         })}
      </Grid>
   );
};

export default DashboardCardsContainer;
