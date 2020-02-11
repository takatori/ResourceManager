import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Task from "../../components/task/Task";

export type State = {
    tasks: Task[]
}
const defaultTasks: Task[] = [
    {id: '1', title: 'Something', state: 'TASK_INBOX'},
    {id: '2', title: 'Something more', state: 'TASK_INBOX'},
    {id: '3', title: 'Something else', state: 'TASK_INBOX'},
    {id: '4', title: 'Something again', state: 'TASK_INBOX'},
];

const name = '/tasks';

const slice = createSlice({
    name: name,
    initialState: {tasks: defaultTasks},
    reducers: {
        archiveTask: (state, action: PayloadAction<{ id: string }>) => {
            state.tasks.map(task =>
                task.id === action.payload.id ? {...task, state: 'TASK_ARCHIVED'} : task)
        },
        pinTask: (state, action: PayloadAction<{ id: string }>) => {
            state.tasks.map(task =>
                task.id === action.payload.id ? {...task, state: 'TASK_PINNED'} : task)
        },
    }
});

export const actions = {...slice.actions};

export default slice.reducer;