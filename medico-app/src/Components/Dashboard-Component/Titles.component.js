import styled from "styled-components";

const Headings = styled.h2`
   color: ${(props) => props.color};
   font-size: 1.5em;
   margin: 0;
   font-weight: bolder;
`;

const Titles = ({ title, color }) => {
   return <Headings color={`${color}`}>{title}</Headings>;
};

export default Titles;
