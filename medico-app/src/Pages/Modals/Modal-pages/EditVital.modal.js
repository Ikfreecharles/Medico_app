import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setPatientId } from "../../../Redux/Form/Form.action";
import {
   openEditPatient,
   selectedPatientOptionId,
} from "../../../Redux/Modals/Modals.actions";
import { openPatientVitalEditModal } from "../../../Redux/Modals/Modals.actions";
import ContainerComponent from "../../../Components/TopBar-Component/Container.component";
import { EDIT_PATIENT_OPTIONS } from "../../../Inputs/EditPatientOption.input";

const ContainerComponentDiv = styled.div`
   position: absolute;
   right: -70px;
   border-radius: var(--border-radius) !important;
   background-color: var(--main-white);
   z-index: 999;
   box-shadow: -4px 4px 11px -2px rgba(71, 159, 218, 0.11) !important;
   -webkit-box-shadow: -4px 4px 11px -2px rgba(71, 159, 218, 0.11) !important;
   -moz-box-shadow: -4px 4px 11px -2px rgba(71, 159, 218, 0.11) !important;
   ul {
      li {
         list-style-type: none;
         padding: 0.7rem 1rem;
         cursor: pointer;
         display: flex;
         align-items: center;
         &:hover {
            background-color: var(--light-grey);
         }
         &:last-child {
            color: red;
         }
         span {
            margin-left: 1.5rem;
         }
      }
   }
`;

const EditVitalModal = ({ patientId }) => {
   const dispatch = useDispatch();

   const handleClick = async (
      dispatch,
      patientId,
      setPatientIdAction,
      selectedPatientOptionIdAction,
      openModalAction,
      openEditPatientAction,
      id
   ) => {
      await dispatch(setPatientIdAction(patientId));
      await dispatch(selectedPatientOptionIdAction(id));
      await dispatch(openModalAction());
      await dispatch(openEditPatientAction());
   };

   return (
      <ContainerComponentDiv>
         <ContainerComponent action={openEditPatient}>
            <ul>
               {EDIT_PATIENT_OPTIONS.map((items) => {
                  const { id, Icon, item } = items;

                  return (
                     <li
                        key={id}
                        onClick={() =>
                           handleClick(
                              dispatch,
                              patientId,
                              setPatientId,
                              selectedPatientOptionId,
                              openPatientVitalEditModal,
                              openEditPatient,
                              id
                           )
                        }
                     >
                        <Icon /> <span>{item}</span>
                     </li>
                  );
               })}
            </ul>
         </ContainerComponent>
      </ContainerComponentDiv>
   );
};

export default EditVitalModal;
