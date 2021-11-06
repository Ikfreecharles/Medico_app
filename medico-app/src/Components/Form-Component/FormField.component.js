import styled from "styled-components";

const LabelStyle = styled.label`
   font-size: 1rem;
`;

const InputContainerDiv = styled.div`
   margin-top: 0.5rem;
   input,
   select {
      width: 100%;
      padding: 1rem;
      border: 1px solid var(--light-grey);
      border-radius: var(--border-radius);
      display: block;

      &:focus {
         outline: 1px solid var(--main-blue);
      }
      &::placeholder {
         color: var(--light-grey);
         font-family: var(--main-font);
      }
   }
   em {
      font-size: 0.7rem;
   }
`;

const FormFieldComponent = (props) => {
   const { label, onChange, info, ...inputProps } = props;

   //if type = select
   if (props.type === "select")
      return (
         <LabelStyle htmlFor={props.name} className={props.name}>
            {label}:
            <br />
            <InputContainerDiv>
               <select onChange={onChange} {...inputProps}>
                  <option
                     disabled
                     selected
                     label="-- Select an item --"
                  ></option>
                  {props.options.map((option) => {
                     const { id, optionOne, optionTwo } = option;
                     return (
                        <option key={id} id={optionTwo} value={optionOne}>
                           {optionOne}
                        </option>
                     );
                  })}
               </select>
               {info && <em>{info}</em>}
            </InputContainerDiv>
         </LabelStyle>
      );
   //if the type = input
   return (
      <LabelStyle htmlFor={props.name} className={props.name}>
         {label}:
         <br />
         <InputContainerDiv>
            <input onChange={onChange} {...inputProps} />
            {info && <em>{info}</em>}
         </InputContainerDiv>
      </LabelStyle>
   );
};

export default FormFieldComponent;
