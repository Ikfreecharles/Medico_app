//imports from within external projects
import { useState } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

//imports from within the project
import FormFieldComponent from "../FormField.component";
import { ADDRESS_STATE } from "../../../Utils/States.utils";
import {
   handleActions,
   handleChange,
   handleSubmit,
   mutationCallback,
} from "../../../Utils/Functions.utils";
import { ADDRESS_INPUT } from "../../../GraphQL/Mutations.graphql";
import { ADDRESS } from "../../../Inputs/AddAddress.input";
import {
   formIncreaseStep,
   resetFormStep,
   setPatientId,
} from "../../../Redux/Form/Form.action";
import AlertPopupComponent from "../AlertPopup.component";
import { GET_ALL_PATIENT } from "../../../GraphQL/Queries.graphql";
import { openCreatePatientModal } from "../../../Redux/Modals/Modals.actions";
import FormContainerForm from "./FormContainer.form";

const AddressBodyDiv = styled.div`
   display: grid;
   grid-template-columns: auto auto;
   grid-gap: 1.5rem;
`;

const AddAddressForm = ({ currentStep }) => {
   const patientId = useSelector((state) => state.form.patientId);
   const dispatch = useDispatch();
   const [address, setAddress] = useState({
      patientId: patientId,
      address: "",
      postCode: "",
      state: "",
   });
   const [createAddress, { loading, error }] = useMutation(ADDRESS_INPUT, {
      onCompleted: async (data) => {
         await mutationCallback(
            setPatientId,
            data.createAddress.id,
            dispatch,
            error,
            [formIncreaseStep]
         );
      },
      refetchQueries: [{ query: GET_ALL_PATIENT }],
   });

   if (loading) return <CircularProgress />;
   return (
      <FormContainerForm
         formtitle={"Create new patient"}
         title={"Add Patient Address"}
         subtitle={`- Step ${currentStep} of 4 -`}
         handleSubmit={async (e) =>
            handleSubmit(
               e,
               createAddress,
               address,
               setAddress,
               ADDRESS_STATE,
               dispatch,
               [openCreatePatientModal, resetFormStep]
            )
         }
         handleCancel={() => handleActions(dispatch, [openCreatePatientModal])}
         buttoncolor={"var(--main-green)"}
         subheadingcolor={"var(--main-blue)"}
         buttons
      >
         {error && (
            <AlertPopupComponent
               isOpen={true}
               severity={"error"}
               errorMessage={error.message}
               errorTitle={"An error has occured"}
            />
         )}
         <AddressBodyDiv>
            {ADDRESS.map((patientAddress) => {
               return (
                  <FormFieldComponent
                     key={patientAddress.id}
                     {...patientAddress}
                     value={address[patientAddress.name]}
                     onChange={(e) =>
                        patientAddress.name !== "patientId" &&
                        handleChange(e, setAddress, address)
                     }
                  />
               );
            })}
         </AddressBodyDiv>
      </FormContainerForm>
   );
};

export default AddAddressForm;
