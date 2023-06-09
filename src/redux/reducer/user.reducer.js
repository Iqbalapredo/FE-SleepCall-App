const initialState = {
  user: [],
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
