//function to handle changes in form input
export const handleChange = (e, setState, state) => {
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
   defaultState,
   dispatch,
   actions
) => {
   try {
      e.preventDefault();
      await mutationFuntion({ variables: { input: state } });
      defaultState && (await setState(defaultState));
      actions && actions.map((action) => dispatch(action()));
   } catch (error) {
      console.log(error);
   }
};

//function to handle form cancel
export const handleActions = (dispatch, action, payload) => {
   action.map((actions) => dispatch(actions(payload && payload)));
};

//function to handle callback after every mutation in the form
export const mutationCallback = async (
   setPatientId,
   mutatedDataId,
   dispatch,
   error,
   action,
   payload
) => {
   try {
      await dispatch(setPatientId(mutatedDataId));
      !error &&
         action.length > 0 &&
         action.map((actions) => dispatch(actions(payload && payload)));
   } catch (error) {
      console.log(error);
   }
};
