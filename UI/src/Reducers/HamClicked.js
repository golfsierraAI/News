var HamClicked = (state = { init: false }, action) => {
  switch (action.type) {
    case "Ham_clicked": {
      return { ...state, init: !state.init };
    }
    default:
      return state;
  }
};
export default HamClicked;
