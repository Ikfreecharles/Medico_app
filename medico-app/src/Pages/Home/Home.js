import { Route } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "../Sub-Pages/Dashboard/Dashboard.container";
import Patients from "../Sub-Pages/Patients/Patients.container";
import SideBar from "../Sub-Pages/Side-bar/SideBar";
import TopBar from "../Top-bar/TopBar";

const SideBarContainer = styled.section`
   min-width: 220px;
   position: relative;
`;

const MainViewContainer = styled.section`
   width: 100%;
`;

const Home = () => {
   return (
      <section style={{ display: "flex", justifyContent: "space-between" }}>
         <SideBarContainer>
            <SideBar />
         </SideBarContainer>
         <MainViewContainer>
            <TopBar />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/patients" component={Patients} />
         </MainViewContainer>
      </section>
   );
};

export default Home;
