//function to handle changes in form input
export const handleChange = (e, setState, state, patientId) => {
   setState((state) => ({
      ...state,
      [e.target.name]:
         e.target.type === "number"
            ? parseInt(e.target.value)
            : e.target.name === "language" ||
              e.target.name === "conditions" ||
              e.target.name === "allergies" ||
              e.target.name === "medications"
            ? e.target.value.split(",")
            : e.target.value,
   }));
};

//function to handle form submit
export const handleSubmit = async (
   e,
   mutationFuntion,
   state,
   setState,
   defaultState
) => {
   try {
      e.preventDefault();
      await mutationFuntion({ variables: { input: state } });
      setState(defaultState);
   } catch (error) {
      console.log(error);
   }
};

//function to handle form cancel
export const handleCancel = (dispatchCall, action, payload) => {
   payload ? dispatchCall(action(payload)) : dispatchCall(action());
};

//function to handle callback after every mutation in the form
export const mutationCallback = async (
   setPatientId,
   mutatedDataId,
   dispatch,
   setStep
) => {
   try {
      await dispatch(setPatientId(mutatedDataId));
      await dispatch(setStep());
   } catch (error) {
      console.log(error);
   }
};
