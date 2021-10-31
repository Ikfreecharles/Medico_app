//function to handle the generation and styliing of the table cells
export const handleTableCellRender = (
   heading,
   item,
   Pie,
   Box,
   Typo,
   ProgressBar,
   styling
) => {
   if (heading === "test" || heading === "status") {
      return (
         <Box sx={{ position: "relative", display: "inline-flex" }}>
            <Pie
               variant="determinate"
               value={item}
               sx={
                  item < 41
                     ? { color: "var(--main-red)" }
                     : item < 70
                     ? { color: "var(--main-orange)" }
                     : item <= 100
                     ? { color: "var(--main-green)" }
                     : ""
               }
            />
            <Box
               sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               <Typo
                  variant="caption"
                  component="div"
                  sx={styling}
               >{`${item}%`}</Typo>
            </Box>
         </Box>
      );
   }
   if (heading === "patientName") {
      return (
         <div style={{ display: "flex", alignItems: "center" }}>
            {item.userAvatar ? (
               <img
                  src={item.userAvatar}
                  alt={item}
                  style={{ marginRight: "0.3rem", width: "2.2rem" }}
               />
            ) : (
               <div
                  style={{
                     width: "2.5rem",
                     height: "2.5rem",
                     color: "var(--main-white)",
                     borderRadius: "50%",
                     backgroundColor: "var(--main-blue)",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     marginRight: "0.6rem",
                  }}
               >{`${item.charAt(0).toUpperCase()}`}</div>
            )}
            <p>{`${item}`}</p>
         </div>
      );
   }
   if (heading === "recovery") {
      return (
         <ProgressBar
            variant="determinate"
            value={item}
            sx={{
               backgroundColor: "var(--light-grey)",
               borderRadius: "10px",
            }}
         />
      );
   }
   if (heading === "examination" || heading === "priority") {
      return (
         <p
            style={
               item.marker === 1
                  ? { color: "var(--main-blue)" }
                  : item.marker === 2
                  ? { color: "var(--main-orange)" }
                  : item.marker === 3
                  ? { color: "var(--main-green)" }
                  : { color: "var(--light-grey)" }
            }
         >
            {item.examination
               ? item.examination
               : item.Priority
               ? item.Priority
               : "No examination"}
         </p>
      );
   }
   if (heading === "newAge") {
      return `${item} years`;
   } else {
      return item;
   }
};

//function to generate new custom body from the data
export const generateBody = (data, moment, getAge) => {
   const patientName = `${data.firstName} ${data.lastName}`;
   const modifiedAdmittedDate = moment(
      data.admittedDate,
      "YYYY-MM-DD"
   ).fromNow();
   const newAge = getAge(data.dob);
   const { firstName, lastName, admittedDate, dob, ...newdata } = data;
   return {
      ...newdata,
      patientName,
      modifiedAdmittedDate,
      newAge,
   };
};
