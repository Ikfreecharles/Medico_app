import styled from "styled-components";
import ViewAllButton from "../../Dashboard-Component/ViewAllButton.component";

const FormContainerFormdiv = styled.div`
   border-radius: var(--border-radius);
`;
const HeadingDiv = styled.div`
   padding: 2rem 0;
   align-content: center;
   border-bottom: 1px solid var(--light-grey);
   position: sticky;
   top: 0;
   width: 100%;
   background-color: var(--main-white);
   h2 {
      text-align: center;
      font-size: 1.2rem;
      color: var(--main-grey);
   }
`;
const FormBody = styled.div`
   padding: 0 0 3rem;
`;
const SubheadingDiv = styled.div`
   padding: 1.5rem 0 3rem;
   align-content: center;

   h4 {
      font-size: 1.8rem;
      color: ${(props) => props.subheadingcolor};
      text-align: center;
      margin: 0 0 0.5rem 0;
   }
   p {
      margin: 0;
      text-align: center;
      color: var(--main-grey);
   }
`;
const FormContainer = styled.div`
   padding: 0 4rem;
`;
const ButtonDiv = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 2rem 4rem;
   border-top: 1px solid var(--light-grey);
   background-color: var(--lighter-grey);
   position: sticky;
   bottom: 0;
`;
const SaveCancelButtons = styled.div`
   display: flex;
   button {
      margin-left: 1rem;
   }
`;

const FormContainerForm = ({
   formtitle,
   title,
   subtitle,
   children,
   handleSubmit,
   handleCancel,
   subheadingcolor,
   buttoncolor,
   buttons,
   buttonText,
}) => {
   return (
      <FormContainerFormdiv>
         <HeadingDiv>
            <h2>{formtitle}</h2>
         </HeadingDiv>

         <form onSubmit={handleSubmit}>
            <FormBody>
               <SubheadingDiv subheadingcolor={subheadingcolor}>
                  <h4>{title}</h4>
                  <p>{subtitle}</p>
               </SubheadingDiv>
               <FormContainer>{children}</FormContainer>
            </FormBody>
            {buttons && (
               <ButtonDiv>
                  <div>
                     <ViewAllButton
                        type={"button"}
                        text={"Back"}
                        outline={true}
                        outlinecolor={"var(--main-grey)"}
                        color={"var(--main-grey)"}
                     />
                  </div>
                  <SaveCancelButtons>
                     <div onClick={handleCancel}>
                        <ViewAllButton
                           type={"button"}
                           text={"Cancel"}
                           outline={true}
                           outlinecolor={"var(--main-grey)"}
                           color={"var(--main-grey)"}
                        />
                     </div>
                     <ViewAllButton
                        type={"submit"}
                        text={buttonText ? buttonText : "Save"}
                        backgroundcolor={buttoncolor}
                        color={"var(--main-white)"}
                     />
                  </SaveCancelButtons>
               </ButtonDiv>
            )}
         </form>
      </FormContainerFormdiv>
   );
};

export default FormContainerForm;
