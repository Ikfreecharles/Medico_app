//imports from external libraries
import styled from "styled-components";
import { useQuery } from "@apollo/client";

//imports from within the project
import { tableData } from "../../../../Redux/TableData";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import SearchField from "../../../../Components/Dashboard-Component/Search.component";
import ViewAllButton from "../../../../Components/Dashboard-Component/ViewAllButton.component";
import TableComponent from "../../../../Components/Dashboard-Component/Table.component";
import SelectFilterComponent from "../../../../Components/Dashboard-Component/SelectFilter.component";
import { GET_ALL_PATIENT } from "../../../../GraphQL/Queries.graphql";
import { CircularProgress } from "@mui/material";

const DashboardContainer = styled.div`
   background-color: var(--main-white);
   padding: 2rem;
   margin-top: 0.8rem;
   border-radius: var(--border-radius);
`;

const HeaderContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const SearchFieldContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   & > * {
      margin-left: 0.4rem;
   }
`;

const diagnosis = ["Influenza", "Covid-19", "Malaria", "Diahrreah"];

const DashboardTableContainer = () => {
   const { loading, error, data } = useQuery(GET_ALL_PATIENT);

   return (
      <DashboardContainer>
         <HeaderContainer>
            <Titles title={"Your Patients"} color={"var(--main-blue)"} />
            <SearchFieldContainer>
               <SearchField style={{ paddingRight: "40px" }} />
               <SelectFilterComponent options={diagnosis} label={"Diagnosis"} />
               <ViewAllButton
                  color={"var(--main-white)"}
                  link={"Patients"}
                  backgroundcolor={"var(--main-blue)"}
                  text={"View all".toUpperCase()}
                  icon={true}
               />
            </SearchFieldContainer>
         </HeaderContainer>
         <div style={{ marginTop: "2rem" }}>
            {loading && <CircularProgress />}
            {error && <h2>{error.message}</h2>}
            {data && <TableComponent tableData={data.getAllPatients} />}
            {console.log(data)}
         </div>
      </DashboardContainer>
   );
};

export default DashboardTableContainer;
