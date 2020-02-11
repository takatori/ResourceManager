import {combineReducers} from "redux";
import tasksReducer from "./tasks";

export interface RootState {
    tasks: ReturnType<typeof tasksReducer>;
}

export const rootReducer = combineReducers<RootState>({
    tasks: tasksReducer
});
