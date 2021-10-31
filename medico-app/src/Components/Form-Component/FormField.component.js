import styled from "styled-components";

const InputContainerDiv = styled.div`
   margin: 0 2rem 1rem 0;

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
      }
   }
   em {
      font-size: 0.7rem;
   }
`;

const FormFieldComponent = (props) => {
   const { label, onChange, info, ...inputProps } = props;
   //if select instead of input
   if (props.type === "select")
      return (
         <label htmlFor={props.name}>
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
         </label>
      );
   //if the input does not have the require attribute
   return (
      <label htmlFor={props.name}>
         {label}:
         <br />
         <InputContainerDiv>
            <input onChange={onChange} {...inputProps} />
            {info && <em>{info}</em>}
         </InputContainerDiv>
      </label>
   );
};

export default FormFieldComponent;
