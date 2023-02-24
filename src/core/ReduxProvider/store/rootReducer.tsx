import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { addTaskReducer } from "../../../actions/taskAction";

// sample persist config for save some data on localStorage
const testPersistConfig = {
  key: "tasks",
  storage: storage,
  whitelist: ["tasksState"],
};

export const rootReducer = () =>
  combineReducers({
    tasks: persistReducer(testPersistConfig, addTaskReducer),
  });
