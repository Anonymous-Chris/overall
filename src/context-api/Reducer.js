export const initialState = {
  live: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_LIVE_STATUS":
      return {
        ...state,
        live: true,
      };

    default:
      return state;
  }
};

export default reducer;
