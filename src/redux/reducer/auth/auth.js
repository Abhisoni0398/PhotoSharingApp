import * as actionLabels from "../../type";

export const initialState = {
  isLogin: false,
  isLoading: false,
  userData: "",
  errorMsg: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.LOGIN_START:
      return { ...state, isLoading: true };
    case actionLabels.LOGIN_SUCCESS: {
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        userData: payload,
        errorMsg: "",
      };
    }
    case actionLabels.LOGIN_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    default:
      return state;
  }
};
