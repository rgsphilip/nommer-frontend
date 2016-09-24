//Utilized https://scotch.io/tutorials/build-a-react-flux-app-with-user-authentication to implement authentication, including this file.

import AppDispatcher from '../dispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';

export default {
  logUserIn: (profile, token) => {
    AppDispatcher.dispatch({
      actionType : AuthConstants.LOGIN_USER,
      profile : profile,
      token : token
    });
  },

  logUserOut: () => {
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGOUT_USER
    });
  }
}