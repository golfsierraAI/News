var NewsContentReducer = (state = { init: 0 }, action) => {
  switch (action.type) {
    case "News_Assigned": {
      return { ...state, init: action.payload };
    }
    default:
      return state;
  }
};
export default NewsContentReducer;
