import styled from "styled-components";
import { tableData } from "../../../../Redux/TableData";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import SearchField from "../../../../Components/Dashboard-Component/Search.component";
import ViewAllButton from "../../../../Components/Dashboard-Component/ViewAllButton.component";
import TableComponent from "../../../../Components/Dashboard-Component/Table.component";

const DashboardContainer = styled.div`
   background-color: #fff;
   padding: 2rem;
   border-radius: 30px;
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
`;

const DashboardTableContainer = () => {
   return (
      <DashboardContainer>
         <HeaderContainer>
            <Titles title={"Your Patients"} color={"#009CF4"} />
            <SearchFieldContainer>
               <SearchField style={{ paddingRight: "40px" }} />
               <ViewAllButton
                  color={"#fff"}
                  link={"/"}
                  backgroundcolor={"#396CFF"}
               />
            </SearchFieldContainer>
         </HeaderContainer>
         <TableComponent tableData={tableData} />
      </DashboardContainer>
   );
};

export default DashboardTableContainer;
