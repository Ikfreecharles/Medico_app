//imports from external libraries
import { useReducer, useRef, useCallback, useEffect } from "react";
import _ from "lodash";
import faker from "faker";
import { Search, Grid } from "semantic-ui-react";
import styled from "styled-components";

const source = _.times(5, () => ({
   title: faker.company.companyName(),
   description: faker.company.catchPhrase(),
   image: faker.internet.avatar(),
   price: faker.finance.amount(0, 100, 2, "$"),
}));

const initialState = {
   loading: false,
   results: [],
   value: "",
};

function searchReducer(state, action) {
   switch (action.type) {
      case "CLEAN_QUERY":
         return initialState;
      case "START_SEARCH":
         return { ...state, loading: true, value: action.query };
      case "FINISH_SEARCH":
         return { ...state, loading: false, results: action.results };
      case "UPDATE_SELECTION":
         return { ...state, value: action.selection };

      default:
         throw new Error();
   }
}

//styling - styled component
const SearchFieldContainer = styled.div`
   div {
      div {
         div {
            div {
               input {
                  border-radius: 3px !important;
                  width: 20rem;
                  padding-top: 1.05rem !important;
                  padding-bottom: 1.05rem !important;
                  border: 1px solid #e8e8e8 !important;
               }
            }
         }
      }
   }
`;

function SearchField() {
   const [state, dispatch] = useReducer(searchReducer, initialState);
   const { loading, results, value } = state;

   const timeoutRef = useRef();
   const handleSearchChange = useCallback((e, data) => {
      clearTimeout(timeoutRef.current);
      dispatch({ type: "START_SEARCH", query: data.value });

      timeoutRef.current = setTimeout(() => {
         if (data.value.length === 0) {
            dispatch({ type: "CLEAN_QUERY" });
            return;
         }

         const re = new RegExp(_.escapeRegExp(data.value), "i");
         const isMatch = (result) => re.test(result.title);

         dispatch({
            type: "FINISH_SEARCH",
            results: _.filter(source, isMatch),
         });
      }, 300);
   }, []);

   useEffect(() => {
      return () => {
         clearTimeout(timeoutRef.current);
      };
   }, []);
   return (
      <SearchFieldContainer>
         <Grid style={{ margin: "0" }}>
            <Grid.Column width={8} style={{ padding: "0" }}>
               <Search
                  loading={loading}
                  onResultSelect={(e, data) =>
                     dispatch({
                        type: "UPDATE_SELECTION",
                        selection: data.result.title,
                     })
                  }
                  onSearchChange={handleSearchChange}
                  results={results}
                  value={value}
               />
            </Grid.Column>
         </Grid>
      </SearchFieldContainer>
   );
}

export default SearchField;
