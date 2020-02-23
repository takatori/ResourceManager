import React from 'react';
import {Provider as ReduxProvider} from 'react-redux'
import {createStore} from "../modules/createStore";
import InboxScreen from "./tasks/InboxScreen";
import {BrowserRouter as Router, Route} from "react-router-dom";

const store = createStore();
const App: React.FC = () => {
    return (
        <ReduxProvider store={store}>
            <Router>
                <Route path="/tasks">
                    <InboxScreen/>
                </Route>
            </Router>
        </ReduxProvider>
    );
};

export default App;
