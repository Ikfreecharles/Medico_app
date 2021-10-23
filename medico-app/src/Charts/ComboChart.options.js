export const comboChartOptions = {
   width: "100%",
   height: "100%",
   seriesType: "bars",
   series: { 4: { type: "line" } },
   bar: { groupWidth: "60%" },
   chartArea: { width: "90%", height: "80%" },
   legend: { position: "top", alignment: "end" },
   fontName: "Trebuchet MS",
   fontSize: "11",
   colors: ["#479FDA", "#00E2BB", "#00D0E9", "#E8E8E8", "#306ef6"],
   lineWidth: "1",
   curveType: "function",
   vAxis: {
      baselineColor: "none",
      gridlines: {
         color: "#F0F0F0",
      },
      minorGridlines: {
         color: "#fff",
      },
   },
};
