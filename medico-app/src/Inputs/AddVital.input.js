export const VITAL = [
   {
      id: 1,
      label: "Patient ID *",
      type: "text",
      name: "patientId",
      placeholder: "Patient ID",
      required: true,
      disabled: true,
   },
   {
      id: 2,
      label: "Vital Type *",
      type: "select",
      name: "vitalType",
      placeholder: "Vital Type",
      options: [
         { id: 1, optionOne: "Blood Pressure" },
         { id: 2, optionOne: "Heart Rate" },
         { id: 3, optionOne: "Glucose" },
         { id: 4, optionOne: "Cholesterol" },
      ],
      required: true,
   },
   {
      id: 3,
      label: "Vital Number *",
      type: "text",
      name: "vitalNumber",
      placeholder: "Vital Number",
      required: true,
   },
];
