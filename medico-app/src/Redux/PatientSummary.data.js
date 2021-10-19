export const PatientSummaryData = [
   [
      "month",
      "Discharged Patients",
      "Recovered Patients",
      "Registered Patients",
      "Deaths",
      "Average",
   ],
   ["Jan", 40, 44, 5, 4, 18.6],
   ["Feb", 33, 23, 28, 5, 17.8],
   ["Mar", 35, 48, 49, 1, 26.6],
   ["Apr", 11, 59, 59, 1, 26.0],
   ["May", 19, 55, 48, 1, 24.6],
   ["Jun", 17, 17, 40, 1, 15.0],
   ["Jul", 4, 18, 8, 5, 7.0],
   ["Aug", 56, 2, 41, 0, 19.8],
   ["Sep", 25, 35, 40, 1, 20.2],
   ["Oct", 39, 34, 44, 3, 24.0],
   ["Nov", 15, 32, 15, 2, 12.8],
   ["Dec", 20, 9, 49, 3, 16.2],
   ["Jan", 28, 12, 43, 5, 17.6],
];

const month = [
   "Jan",
   "Feb",
   "Mar",
   "Apr",
   "May",
   "Jun",
   "Jul",
   "Aug",
   "Sep",
   "Oct",
   "Nov",
   "Dec",
];

export const baseArray = [
   [
      "month",
      "Discharged Patients",
      "Recovered Patients",
      "Registered Patients",
      "Deaths",
      "Average",
   ],
];

export const generateData = (baseArray, numberOfItem) => {
   let a = 0;
   for (let i = 0; i < numberOfItem; i++) {
      const innerData = [];
      console.log(a);
      if (a > 11) {
         a = 0;
         innerData.push(month[a]);
      } else {
         innerData.push(month[a]);
      }

      for (let j = 0; j < 4; j++) {
         if (j === 3) innerData.push(Math.floor(Math.random() * 6));
         else innerData.push(Math.floor(Math.random() * 60));
      }
      innerData.push(
         (
            innerData.slice(1).reduce((a, b) => a + b) / innerData.length
         ).toFixed(2)
      );
      a++;
      baseArray.push(innerData);
   }
   return baseArray;
};
