import styled from "styled-components";

const UserAvatarDetailsContainer = styled.div`
   display: flex;
   align-items: center;
   margin: 3rem 0 1.5rem 0;
   padding: 0 0 1.5rem 0;
   border-bottom: 1px solid var(--light-grey);
`;

const UserAvatar = styled.img`
   border-radius: 50%;
   width: 70px;
`;
const UserInitial = styled.div`
   background-color: var(--main-blue);
   width: 50px;
   height: 50px;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 2rem;
   color: var(--main-white);
`;
const UserDetailsContainer = styled.div`
   margin-left: 1rem;
`;
const Fullname = styled.h2`
   font-size: 1.6rem;
   color: ${(props) => props.namecolor};
   margin: 0;
   font-weight: 500;
   letter-spacing: -0.7px;
`;

const UserDetails = styled.p`
   font-size: 1rem;
   color: ${(props) => props.userdetailscolor};
   margin: 0;
`;

const UserAvatarDetails = ({
   useravatar,
   firstName,
   lastName,
   age,
   gender,
   namecolor,
   userdetailscolor,
}) => {
   return (
      <UserAvatarDetailsContainer>
         {useravatar ? (
            <UserAvatar src={useravatar} />
         ) : (
            <UserInitial>{`${firstName.slice(0, 1)}${lastName.slice(
               0,
               1
            )}`}</UserInitial>
         )}
         <UserDetailsContainer>
            <Fullname
               namecolor={namecolor}
            >{`${firstName} ${lastName}`}</Fullname>
            <UserDetails userdetailscolor={userdetailscolor}>{age}</UserDetails>
            <UserDetails userdetailscolor={userdetailscolor}>
               {gender}
            </UserDetails>
         </UserDetailsContainer>
      </UserAvatarDetailsContainer>
   );
};

export default UserAvatarDetails;
