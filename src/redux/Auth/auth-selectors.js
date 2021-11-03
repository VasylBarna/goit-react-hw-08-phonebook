export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getFetchingCurrentUser = state => state.auth.fetchCurrentUser;

export const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserEmail,
  getFetchingCurrentUser,
};
