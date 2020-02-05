import React from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import {Provider as ReduxProvider} from 'react-redux'
import {setupStore} from "../reducers";

const store = setupStore();

const App: React.FC = () => {
    return (
        <ReduxProvider store={store}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </ReduxProvider>
    );
}

export default App;
