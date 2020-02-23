import React from 'react';
import Tasks from "./Tasks";

export type InboxScreenProps = {
    error?: string
}

export const InboxScreen: React.FC<InboxScreenProps> = ({error = null}) => {
    if (error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad"/>
                    <div className="title-message">Oh no!</div>
                    <div className="subtitle-message">Something went wrong</div>
                </div>
            </div>
        );
    }

    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">
                    <span className="title-wrapper">TaskBox</span>
                </h1>
            </nav>
            <Tasks/>
        </div>
    )
};

export default InboxScreen;