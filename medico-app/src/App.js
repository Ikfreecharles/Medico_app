//import from external libraries
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";

//import from with the project
import DatepickerComponent from "../src/Components/Dashboard-Component/Datepicker.component";
import HamburgerAndHeading from "../src/Components/Dashboard-Component/HamburgerAndHeading.component";
import { topbarTitleChange } from "../src/Redux/Modals/Modals.actions";
import Appointment from "../src/Pages/Page/Appointments/Appointment.container";
import Dashboard from "../src/Pages/Page/Dashboard/Dashboard.container";
import Patients from "../src/Pages/Page/Patients/Patients.container";
import SideBar from "../src/Pages/Page/Side-bar/SideBar";
import TopBar from "../src/Pages/Top-bar/TopBar";
import OpenModalPage from "./Pages/Modals/OpenModal.page";

//make outer container display inline block to make it the container responsive when hamburger toggled
const SideBarContainer = styled.section`
   display: inline-block;
   margin-right: 0.4rem;
   background-color: #fff;

   @media only screen and (max-width: 500px) {
      display: none;
   }
`;
//100% will make the maincontainer fill the available view #fafbff
const MainViewContainer = styled.section`
   width: 100%;

   @media only screen and (max-width: 500px) {
      overflow: none;
      height: auto;
   }
`;

const TopBarContainer = styled.div`
   min-height: 15vh;
   position: -webkit-sticky;
   position: sticky;
   top: 0;
   z-index: 999;
   background-color: var(--background-color);
   padding-bottom: 0.8rem;

   @media only screen and (max-width: 500px) {
      display: block;
      height: auto;
   }
`;

const App = () => {
   //get the page title from the redux store
   const title = useSelector((state) => state.modal.title);
   const dispatch = useDispatch();
   const { pathname } = useLocation();

   useEffect(() => {
      dispatch(topbarTitleChange(pathname.slice(1)));
   }, [dispatch, pathname]);

   return (
      <section
         style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#F2F7FF",
         }}
      >
         <SideBarContainer>
            <SideBar />
         </SideBarContainer>
         <MainViewContainer title={title}>
            <TopBarContainer>
               <TopBar />
               <div
                  style={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "space-between",
                     marginTop: "0.8rem",
                  }}
               >
                  <HamburgerAndHeading heading={title} />
                  <DatepickerComponent />
               </div>
            </TopBarContainer>
            <Switch>
               <Route path="/" exact>
                  <h1>Welcome to the medico app</h1>
               </Route>
               <Route path="/dashboard" component={Dashboard} />
               <Route path="/patients" component={Patients} />
               <Route path="/appointments" component={Appointment} />
            </Switch>
         </MainViewContainer>
         <OpenModalPage />
      </section>
   );
};

export default App;
