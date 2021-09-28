import styled from "styled-components";

const AvatarContainer = styled.div`
   width: ${(props) => props.dimension};
   height: ${(props) => props.dimension};
   border-radius: 50%;
   background-image: url(${(props) => props.backgroundimage});
   background-size: contain;
`;

const Avatar = ({ dimension, backgroundimage }) => {
   return (
      <>
         <AvatarContainer
            dimension={dimension}
            backgroundimage={backgroundimage}
         />
      </>
   );
};

export default Avatar;
