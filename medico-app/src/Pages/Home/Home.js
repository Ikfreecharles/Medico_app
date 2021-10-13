//import from external libraries
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";

//import from with the project
import HamburgerAndHeading from "../../Components/Dashboard-Component/HamburgerAndHeading.component";
import { topbarTitleChange } from "../../Redux/Top-bar/Topbar.actions";
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
   background-color: #fafbff;
`;

const TopBarContainer = styled.div`
   padding: 2rem 3rem 0 2rem;
   display: flex;
   align-items: center;
   justify-content: space-between;

   @media only screen and (max-width: 500px) {
      display: block;
   }
`;

const Home = () => {
   //get the page title from the redux store
   const title = useSelector((state) => state.topBar.title);
   const dispatch = useDispatch();
   const { pathname } = useLocation();
   console.log(useLocation());

   useEffect(() => {
      dispatch(topbarTitleChange(pathname.slice(1)));
   }, [dispatch, pathname]);

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
               <Route path="/" exact>
                  <h1>Welcome to the medico app</h1>
               </Route>
               <Route path="/dashboard" component={Dashboard} />
               <Route path="/patients" component={Patients} />
            </Switch>
         </MainViewContainer>
      </section>
   );
};

export default Home;
