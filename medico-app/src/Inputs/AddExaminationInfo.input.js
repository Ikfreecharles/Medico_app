export const EXAMINATION = [
   {
      id: 1,
      label: "Patient ID*",
      type: "text",
      name: "patientId",
      placeholder: "Patient ID",
      required: true,
      disabled: true,
   },
   {
      id: 2,
      label: "Examination*",
      type: "select",
      name: "examination",
      placeholder: "Examination",
      required: "requried",
      options: [
         { id: 0, optionOne: "On going treatment", optionTwo: "1" },
         { id: 1, optionOne: "Hospitalized", optionTwo: "2" },
         { id: 2, optionOne: "On going examination", optionTwo: "3" },
      ],
   },
];
