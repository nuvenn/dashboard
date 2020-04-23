const INITIAL_STATE = {
  openMainMenu: true,
  openMobileMenu: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "OPEN_MAIN_MENU_SET":
      return {
        ...state,
        openMainMenu: action.payload,
      };
    case "OPEN_MOBILE_MENU_SET":
      return {
        ...state,
        openMobileMenu: action.payload,
      };
    default:
      return state;
  }
};
