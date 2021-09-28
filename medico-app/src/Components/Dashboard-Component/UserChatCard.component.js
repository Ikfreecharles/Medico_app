import styled from "styled-components";

const UserChatCardContainer = styled.div`
   color: ${(props) => props.color};
   width: 94%;
   border-bottom: 1px solid ${(props) => props.bordercolor};
   display: flex;
   align-items: center;
   padding: 1.2rem 1rem;
   cursor: pointer;
   transition: all 0.2s ease-in;
   &:hover {
      background-color: rgba(0, 156, 244, 0.04);
      border-bottom: 1px solid rgba(232, 232, 232, 0);
   }
`;

const UserAvatar = styled.img`
   border-radius: 50%;
   width: 35px;
   height: 35px;
   margin-right: 1rem;
`;

const MessagePreviewContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
`;

const UserFullName = styled.h2`
   font-size: 1rem;
   margin: 0;
`;

const UserMessagePreview = styled.p`
   font-size: 0.8rem;
   margin: 0;
   opacity: 0.17;
   ${(props) =>
      props.newMessage &&
      props.id`
         opacity: 0;
      `}
`;

const MessageTime = styled.p`
   font-size: 10px;
   opacity: 0.3;
   font-style: italics;
`;

const UserChatCard = ({
   fullname,
   messagepreview,
   useravatar,
   color,
   bordercolor,
   time,
}) => {
   return (
      <UserChatCardContainer color={`${color}`} bordercolor={`${bordercolor}`}>
         <UserAvatar src={useravatar} alt={fullname} />
         <MessagePreviewContainer>
            <div>
               <UserFullName>{fullname}</UserFullName>
               <UserMessagePreview>
                  {`${messagepreview.substring(0, 30)}...`}
               </UserMessagePreview>
            </div>
            <MessageTime>{time}</MessageTime>
         </MessagePreviewContainer>
      </UserChatCardContainer>
   );
};

export default UserChatCard;
