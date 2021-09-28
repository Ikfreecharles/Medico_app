import styled from "styled-components";

const UserAvatarDetailsContainer = styled.div`
   display: flex;
   align-items: center;
   margin: 3rem 0;
`;

const UserAvatar = styled.img`
   border-radius: 50%;
   width: 80px;
`;
const UserDetailsContainer = styled.div`
   margin-left: 1rem;
`;
const Fullname = styled.h2`
   font-size: 1.6rem;
   color: ${(props) => props.namecolor};
   margin: 0;
`;

const UserDetails = styled.p`
   font-size: 1rem;
   color: ${(props) => props.userdetailscolor};
   margin: 0;
`;

const UserAvatarDetails = ({
   useravatar,
   fullname,
   age,
   gender,
   namecolor,
   userdetailscolor,
}) => {
   return (
      <UserAvatarDetailsContainer>
         <UserAvatar src={useravatar} />
         <UserDetailsContainer>
            <Fullname namecolor={namecolor}>{fullname}</Fullname>
            <UserDetails userdetailscolor={userdetailscolor}>{age}</UserDetails>
            <UserDetails userdetailscolor={userdetailscolor}>
               {gender}
            </UserDetails>
         </UserDetailsContainer>
      </UserAvatarDetailsContainer>
   );
};

export default UserAvatarDetails;
