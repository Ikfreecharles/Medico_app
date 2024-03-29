import styled from "styled-components";

const DetailContainer = styled.div`
   margin: 0 0.5rem 2rem 0;
   width: 180px;
`;

const DetailHeading = styled.h3`
   font-size: 0.9rem;
   color: ${(props) => props.headingcolor};
   margin-bottom: 0.2rem;
   font-weight: 600;
`;

const DetailBody = styled.p`
   font-size: 1rem;
   color: ${(props) => props.bodycolor};
`;

const UserDetails = ({ userheading, userbody, headingcolor, bodycolor }) => {
   return (
      <DetailContainer>
         <DetailHeading headingcolor={headingcolor}>
            {userheading}
         </DetailHeading>
         <DetailBody bodycolor={bodycolor}>{userbody}</DetailBody>
      </DetailContainer>
   );
};

export default UserDetails;
