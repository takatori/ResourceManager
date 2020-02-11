import React, {useCallback} from 'react';
import {taskListActions, taskListSelectors} from "../../modules/tasks";
import {useDispatch, useSelector} from "react-redux";
import TaskList from "../../components/taskList/TaskList";
import Task from "../../components/task";

export type TasksProps = {
    loading?: Boolean,
}

export const Tasks: React.FC<TasksProps> = ({loading = false}) => {

    const tasks: Task[] = useSelector(taskListSelectors.activeTasks);

    const dispatch = useDispatch();
    const onArchiveTask = useCallback(
        id => dispatch(taskListActions.archiveTask(id)),
        [dispatch]
    );
    const onPinTask = useCallback(
        id => dispatch(taskListActions.pinTask(id)),
        [dispatch]
    );

    return <TaskList loading tasks={tasks} onArchiveTask={onArchiveTask} onPinTask={onPinTask}/>
};

export default Tasks;