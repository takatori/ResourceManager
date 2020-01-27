import React from 'react';

export type TaskProps = {
    id: string,
    title: string,
    state: "archived" | "TASK_ARCHIVED",
}

export const Task: React.FC<TaskProps> = ({id, title, state, ...props}) => (
    <div className={`list-item ${state}`}>
        <label className="checkbox">
            <input
                type="checkbox"
                defaultChecked={state === 'TASK_ARCHIVED'}
                disabled={true}
                name="checked"
            />
        </label>
    </div>
);

export default Task;