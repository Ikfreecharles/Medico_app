//imports from external libraries
import styled from "styled-components";

//imports from within the project
import { tableData } from "../../../../Redux/TableData";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import SearchField from "../../../../Components/Dashboard-Component/Search.component";
import ViewAllButton from "../../../../Components/Dashboard-Component/ViewAllButton.component";
import TableComponent from "../../../../Components/Dashboard-Component/Table.component";
import SelectFilterComponent from "../../../../Components/Dashboard-Component/SelectFilter.component";

const DashboardContainer = styled.div`
   background-color: #fff;
   padding: 2rem;

   margin-top: 2rem;
   border: 1px solid #eee;
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
   return (
      <DashboardContainer>
         <HeaderContainer>
            <Titles title={"Your Patients"} color={"#009CF4"} />
            <SearchFieldContainer>
               <SearchField style={{ paddingRight: "40px" }} />
               <SelectFilterComponent options={diagnosis} label={"Diagnosis"} />
               <ViewAllButton
                  color={"#fff"}
                  link={"Patients"}
                  backgroundcolor={"#396CFF"}
                  text={"View all".toUpperCase()}
                  icon={true}
               />
            </SearchFieldContainer>
         </HeaderContainer>
         <TableComponent tableData={tableData} />
      </DashboardContainer>
   );
};

export default DashboardTableContainer;
