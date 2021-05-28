import {
  AUTH_CANCELED,
  AUTH_COMPLETE_RESOLVED,
  AUTH_FETCH,
  AUTH_RESOLVED,
} from "../types/authTypes";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  token: null,
  role: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_RESOLVED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: action.payload.accessToken.accessToken,
        user: {
          ...action.payload.user,
          emailVerified: action.payload.user.emailVerified ? 1 : 0,
          phoneVerified: action.payload.user.phoneVerified ? 1 : 0,
          bvnVerified: action.payload.user.bvnVerified ? 1 : 0,
          bankVerified: action.payload.user.salaryAccountVerified ? 1 : 0,
          employerVeried: action.payload.user.employerVerified ? 1 : 0,
        },
        role: 1,
      };
    case AUTH_COMPLETE_RESOLVED:
      return {
        ...state,
        isLoading: false,
        user: { ...state.user, ...action.payload },
      };
    case AUTH_CANCELED:
      return {
        ...state,
        isLoading: false,
        token: null,
        role: null,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
