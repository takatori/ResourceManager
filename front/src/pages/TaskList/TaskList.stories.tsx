import React from 'react';
import {actionsData, taskData} from "../../components/Task/Task.stories";
import Task from "../../components/Task/Task";
import {storiesOf} from "@storybook/react";
import TaskList from "./TaskList";

export const defaultTasksData: Task[] = [
    {...taskData, id: '1', title: 'Task 1'},
    {...taskData, id: '2', title: 'Task 2'},
    {...taskData, id: '3', title: 'Task 3'},
    {...taskData, id: '4', title: 'Task 4'},
    {...taskData, id: '5', title: 'Task 5'},
    {...taskData, id: '6', title: 'Task 6'},
];

export const withPinnedTasksData: Task[] = [
    ...defaultTasksData.slice(0, 5),
    {id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'},
];

export const Default = () =>
    <TaskList tasks={defaultTasksData} {...actionsData}/>;
export const WithPinnedTasks = () =>
    <TaskList tasks={withPinnedTasksData} {...actionsData}/>;
export const Loading = () =>
    <TaskList loading tasks={[]} {...actionsData}/>;
export const Empty = () =>
    <TaskList tasks={[]} {...actionsData}/>;

storiesOf("TaskList", module)
    .addDecorator(storyFn => <div style={{padding: '3rem'}}>{storyFn()}</div>)
    .add("Default", Default)
    .add("WithPinnedTasks", WithPinnedTasks)
    .add("Loading", Loading)
    .add("Empty", Empty);