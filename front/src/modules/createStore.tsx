import {configureStore, DeepPartial, getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from "redux-logger";
import {rootReducer, RootState} from "./reducers";


export const createStore = (
    preloadedState?: DeepPartial<RootState>,
) => {
    const middlewares = [...getDefaultMiddleware()];

    if (process.env.NODE_ENV === `development`) {
        middlewares.push(logger);
    }

    return configureStore({
        preloadedState,
        reducer: rootReducer,
        middleware: middlewares,
    });

};