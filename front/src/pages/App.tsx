import React from 'react';
import {Provider as ReduxProvider} from 'react-redux'
import {setupStore} from "../reducers";

const store = setupStore();
const App: React.FC = () => {
    return (
        <ReduxProvider store={store}>
        </ReduxProvider>
    );
};

export default App;
