import {createSelector} from "@reduxjs/toolkit";
import {State} from "./slice";
import Task from "../../components/task/Task";
import {RootState} from "../reducers";


const activeTasks = createSelector(
    (state: RootState) => state.tasks,
    tasks => tasks.tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED')
);

export const selectors = {
    activeTasks
};