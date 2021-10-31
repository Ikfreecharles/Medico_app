//imports from within external projects
import { useState } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertTitle, CircularProgress } from "@mui/material";

//imports from within the project
import Titles from "../../Dashboard-Component/Titles.component";
import ViewAllButton from "../../Dashboard-Component/ViewAllButton.component";
import FormFieldComponent from "../FormField.component";
import { ADDRESS_STATE } from "../../../Utils/States.utils";
import {
   handleChange,
   handleSubmit,
   mutationCallback,
} from "../../../Utils/Functions.utils";
import { ADDRESS_INPUT } from "../../../GraphQL/Mutations.graphql";
import { ADDRESS } from "../../../Const/AddAddress.hook";
import {
   formIncreaseStep,
   setPatientId,
} from "../../../Redux/Form/Form.action";

const AddAddressFormContainer = styled.div``;

const AddAddressForm = () => {
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
            formIncreaseStep
         );
      },
   });

   if (loading) return <CircularProgress />;
   if (error)
      return (
         <Alert severity="error">
            <AlertTitle>An error has occured</AlertTitle>
            {error.message}
         </Alert>
      );
   return (
      <AddAddressFormContainer>
         <Titles title={"Add address"} color={"var(--main-blue)"} />
         <form
            onSubmit={async (e) =>
               handleSubmit(
                  e,
                  createAddress,
                  address,
                  setAddress,
                  ADDRESS_STATE
               )
            }
         >
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

            <ViewAllButton
               color={"var(--main-white)"}
               backgroundcolor={"var(--main-green)"}
               text={"Save".toUpperCase()}
            />
         </form>
      </AddAddressFormContainer>
   );
};

export default AddAddressForm;
