import {createSelector} from "@reduxjs/toolkit";
import {State} from "./slice";


const tasks = createSelector(
    (state: State) => state.tasks,
    tasks => tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED')
);

export const selectors = {
    tasks
};