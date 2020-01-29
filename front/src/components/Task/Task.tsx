import React from 'react';

export type Task = {
    id: string,
    title: string,
    state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED'
}

export type TaskProps = {
    task: Task,
    onArchiveTask: Function,
    onPinTask: Function
};

export const Task: React.FC<TaskProps> = ({task: {id, title, state}, onArchiveTask, onPinTask}) => (
    <div className={`list-item ${state}`}>
        <label className="checkbox">
            <input
                type="checkbox"
                defaultChecked={state === 'TASK_ARCHIVED'}
                disabled={true}
                name="checked"
            />
            <span className="checkbox-custom" onClick={() => onArchiveTask(id)}/>
        </label>

        <div className="title">
            <input type="text" value={title} readOnly={true} placeholder="Input title"/>
        </div>

        <div className="actions" onClick={event => event.stopPropagation()}>
            {state !== 'TASK_ARCHIVED' && (
                <a onClick={() => onPinTask(id)}>
                    <span className={`icon-star`}/>
                </a>
            )}
        </div>
    </div>
);

export default Task;