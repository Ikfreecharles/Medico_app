//imports from within the project
import Cards from "../../../../Components/Dashboard-Component/Cards.component";
import { Grid } from "semantic-ui-react";
import { CardsData } from "../../../../Redux/CardsData";

const gridStyle = {
   padding: "0.4rem",
};

const DashboardCardsContainer = () => {
   return (
      <Grid columns={4} style={{ margin: "0" }}>
         {CardsData.map((cardData) => {
            const {
               id,
               total,
               subtitle,
               backgroundcolor,
               width,
               icon,
               changeInfo,
               changeDirection,
               link,
            } = cardData;
            return (
               <Grid.Column
                  key={id}
                  mobile={16}
                  tablet={8}
                  computer={4}
                  style={gridStyle}
               >
                  <Cards
                     title={total}
                     subtitle={subtitle}
                     icon={icon}
                     backgroundcolor={"var(--main-white)"}
                     textcolor={"var(--main-grey)"}
                     width={width}
                     changeInfo={changeInfo}
                     changeDirection={changeDirection}
                     link={link}
                     iconcolor={backgroundcolor}
                  />
               </Grid.Column>
            );
         })}
      </Grid>
   );
};

export default DashboardCardsContainer;
