import {combineReducers} from "redux";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from 'redux-logger'

export interface RootState {

}

export const rootReducer = combineReducers({});

export const setupStore = () => {
    const middlewares = [...getDefaultMiddleware()];

    if (process.env.NODE_ENV === `development`) {
        middlewares.push(logger);
    }

    return configureStore({
        reducer: rootReducer,
        middleware: middlewares,
    });
};