import esLocale from "moment/locale/es";
import moment from "moment";
moment.locale("en", esLocale);
var intialStartDate = moment().startOf("day").local();
var initialEndDate = moment().endOf("day").local();

export const initialState = {
  live: true,
  startDate: intialStartDate,
  endDate: initialEndDate,
  cameraStatus: [],
  testArray: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATE":
      return {
        ...state,
        startDate: action.startDate,
        endDate: action.endDate,
      };
    case "UPDATE_CAMERA_STATUS":
      return {
        ...state,
        cameraStatus: action.cameraStatus,
      };
    case "UPDATE_TEST":
      return {
        ...state,
        testArray: action.testArray,
      };
    default:
      return state;
  }
};

export default reducer;
