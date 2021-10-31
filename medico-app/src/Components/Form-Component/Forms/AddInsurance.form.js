//imports from external libraries
import { useState } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import { INSURANCE_STATE } from "../../../Utils/States.utils";
import { useDispatch, useSelector } from "react-redux";

//imports from within the project
import FormFieldComponent from "../FormField.component";
import {
   handleChange,
   handleSubmit,
   mutationCallback,
} from "../../../Utils/Functions.utils";
import ViewAllButton from "../../Dashboard-Component/ViewAllButton.component";
import { INSURANCE_INPUT } from "../../../GraphQL/Mutations.graphql";
import { CircularProgress } from "@mui/material";
import Titles from "../../Dashboard-Component/Titles.component";
import { INSURANCE } from "../../../Const/AddInsurance.hook";
import {
   formIncreaseStep,
   setPatientId,
} from "../../../Redux/Form/Form.action";

const AddInsuranceFormContainer = styled.div``;

const AddInsuranceForm = () => {
   const patientId = useSelector((state) => state.form.patientId);
   const dispatch = useDispatch();
   const [insurance, setInsurance] = useState({
      patientId: patientId,
      insuranceName: "",
      insuranceNumber: "",
   });

   const [createInsurance, { loading, error }] = useMutation(INSURANCE_INPUT, {
      onCompleted: async (data) => {
         await mutationCallback(
            setPatientId,
            data.createInsurance.id,
            dispatch,
            formIncreaseStep
         );
      },
   });

   if (loading) return <CircularProgress />;
   if (error) return <h2>{(error.message, error)}</h2>;
   return (
      <AddInsuranceFormContainer>
         <Titles
            title={"Add Insurance information"}
            color={"var(--main-blue)"}
         />

         <form
            onSubmit={async (e) =>
               handleSubmit(
                  e,
                  createInsurance,
                  insurance,
                  setInsurance,
                  INSURANCE_STATE
               )
            }
         >
            {INSURANCE.map((patientInsurance) => {
               return (
                  <FormFieldComponent
                     key={patientInsurance.id}
                     {...patientInsurance}
                     value={insurance[patientInsurance.name]}
                     onChange={(e) =>
                        patientInsurance.name !== "patientId" &&
                        handleChange(e, setInsurance, insurance)
                     }
                  />
               );
            })}
            <ViewAllButton
               color={"var(--main-white)"}
               backgroundcolor={"var(--main-green)"}
               text={"Save".toUpperCase()}
            />
         </form>
      </AddInsuranceFormContainer>
   );
};

export default AddInsuranceForm;
