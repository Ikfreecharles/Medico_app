import styled from "styled-components";

const Headings = styled.h2`
   color: ${(props) => props.color};
   font-size: 1.4rem;
   margin: 0;
   font-weight: 600;
   letter-spacing: -0.7px;
`;

const Titles = ({ title, color }) => {
   return <Headings color={`${color}`}>{title}</Headings>;
};

export default Titles;
