import * as types from "../constants/ActionTypes";

export const checkAdminLogout = isLogoutPress => ({
  type: types.CHECK_ADMIN_LOGOUT,
  isLogoutPress
});
