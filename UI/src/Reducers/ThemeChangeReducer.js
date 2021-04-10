var ThemeChangeReducer = (state = { init: 0 }, action) => {
  switch (action.type) {
    case "Theme_changed": {
      return { ...state, init: state.init + 1 };
    }
    default:
      return state;
  }
};
export default ThemeChangeReducer;
