import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

export const EDIT_PATIENT_OPTIONS = [
   { id: 1, item: "Edit patient", Icon: AccountCircleRoundedIcon },
   { id: 2, item: "Edit vitals", Icon: EditRoundedIcon },
   { id: 3, item: "New goals", Icon: TrackChangesRoundedIcon },
   { id: 4, item: "New activities", Icon: TrendingUpRoundedIcon },
   { id: 5, item: "Delete patient", Icon: DeleteRoundedIcon },
];
