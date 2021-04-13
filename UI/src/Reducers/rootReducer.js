import { combineReducers } from "redux";
import ThemeChangeReducer from "./ThemeChangeReducer";
import NewsContentReducer from "./NewsContentReducer";

export var rootReducer = combineReducers({
  ThemeChangeReducer,
  NewsContentReducer,
});
