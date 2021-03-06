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
  testObject: {},
  todoAppState: {},
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
    case "UPDATE_TEST_ARRAY":
      return {
        ...state,
        testArray: action.testArray,
      };
    case "UPDATE_TEST_OBJECT":
      return {
        ...state,
        testObject: action.testObject,
      };

    case "UPDATE_TEST_ARRAY_AND_OBJECT":
      return {
        ...state,
        todoAppState: action.todoAppState.todos.map((item) => {
          if (item.id === action.payload) {
            return { ...item, completed: false, text: "unknown" };
          }
          return {
            ...item,
            text: "chris if here",
          };
        }),
      };
    default:
      return state;
  }
};

export default reducer;
