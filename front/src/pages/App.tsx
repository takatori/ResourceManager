import React from 'react';
import {Provider as ReduxProvider} from 'react-redux'
import {createStore} from "../modules/createStore";
import Tasks from "./tasks/Tasks";

const store = createStore();
const App: React.FC = () => {
    return (
        <ReduxProvider store={store}>
            <Tasks/>
        </ReduxProvider>
    );
};

export default App;
