//import from external libraries
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

//import from with the project
import HamburgerAndHeading from "../../Components/Dashboard-Component/HamburgerAndHeading.component";
import Dashboard from "../Sub-Pages/Dashboard/Dashboard.container";
import Patients from "../Sub-Pages/Patients/Patients.container";
import SideBar from "../Sub-Pages/Side-bar/SideBar";
import TopBar from "../Top-bar/TopBar";

//make outer container display inline block to make it the container responsive when hamburger toggled
const SideBarContainer = styled.section`
   display: inline-block;
`;
//100% will make the maincontainer fill the available view
const MainViewContainer = styled.section`
   width: 100%;
`;

const TopBarContainer = styled.div`
   padding: 2rem 3rem 0 2rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const Home = () => {
   //get the page title from the redux store
   const title = useSelector((state) => state.topBar.title);

   return (
      <section style={{ display: "flex", justifyContent: "space-between" }}>
         <SideBarContainer>
            <SideBar />
         </SideBarContainer>
         <MainViewContainer>
            <TopBarContainer>
               <HamburgerAndHeading heading={title} />
               <TopBar />
            </TopBarContainer>
            <Switch>
               <Route path="/dashboard" component={Dashboard} />
               <Route path="/patients" component={Patients} />
            </Switch>
         </MainViewContainer>
      </section>
   );
};

export default Home;
