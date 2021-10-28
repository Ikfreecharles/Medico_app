import styled from "styled-components";

const InputStyle = styled.input`
   width: 50%;
   padding: 1rem;
   border: none;
   margin: 0 0 1rem 0;
   display: block;
   &:focus {
      outline: none;
   }
`;

const FormFieldComponent = ({
   label,
   onChange,
   type,
   inputName,
   placeholderText,
   value,
   pattern,
   required,
}) => {
   return (
      <>
         {required ? (
            <label htmlFor={inputName}>
               {label}:
               <br />
               <InputStyle
                  type={type}
                  onChange={onChange}
                  id={inputName}
                  name={inputName}
                  placeholder={placeholderText}
                  value={value}
                  pattern={pattern}
                  required
               />
            </label>
         ) : (
            <label htmlFor={inputName}>
               {label}:
               <br />
               <InputStyle
                  type={type}
                  onChange={onChange}
                  id={inputName}
                  name={inputName}
                  placeholder={placeholderText}
                  value={value}
                  pattern={pattern}
               />
            </label>
         )}
      </>
   );
};

export default FormFieldComponent;
