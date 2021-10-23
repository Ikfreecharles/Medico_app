//imports from external libraries
import styled from "styled-components";

const ChipComponentContainer = styled.div`
   border-radius: 10rem;
   padding: 0.3rem 0.6rem;
   display: inline-block;
   margin: 0.5rem 0.3rem 0 0;

   ${(props) =>
      props.chipcolor === 1 &&
      `
   background-color: #D8585F26;
   color:var(--main-red);
   
   `}
   ${(props) =>
      props.chipcolor === 2 &&
      `
   background-color: #EDC03F26;
   color:var(--main-orange);
   
   `}
   ${(props) =>
      props.chipcolor === 3 &&
      `
   background-color: #56BC9E26;
   color:var(--main-green);
   
   `}
   p {
      margin: 0;
      font-size: 0.8rem;
   }
`;

const ChipComponent = ({ chiptext, chipcolor }) => {
   return (
      <ChipComponentContainer chipcolor={chipcolor}>
         <p>{chiptext}</p>
      </ChipComponentContainer>
   );
};

export default ChipComponent;
