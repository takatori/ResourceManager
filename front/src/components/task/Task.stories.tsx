import React from 'react';

import Task from './Task';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export const taskData: Task = {
    id: '1',
    title: 'Test task',
    state: 'TASK_INBOX',
};

export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

storiesOf("Task", module)
    .add("Default", () =>
        <Task task={{...taskData}} {...actionsData} />)
    .add("Pinned", () =>
        <Task task={{...taskData, state: 'TASK_PINNED'}} {...actionsData} />)
    .add("Archived", () =>
        <Task task={{...taskData, state: 'TASK_ARCHIVED'}} {...actionsData} />);
