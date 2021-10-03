import { dashboardTypes } from "./Topbar.types";

export const topbarTitleChange = (title) => ({
   type: dashboardTypes.DASHBOARD_TITLE,
   payload: title,
});
