import {createStore} from "../modules/createStore";
import {DecoratorFunction} from "@storybook/addons";
import {Provider as ReduxProvider} from "react-redux";
import React from "react";


export const createWithRedux = (
    ...[preloadedStore]: Parameters<typeof createStore>
): DecoratorFunction<JSX.Element> => {
    const store = createStore(preloadedStore);
    return storyFn => {
        return <ReduxProvider store={store}>{storyFn()}</ReduxProvider>
    };
};

export const withRedux = createWithRedux();