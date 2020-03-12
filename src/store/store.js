import { createStore } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = 0;

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

export const incrementAction = () => ({
    type: INCREMENT
});

export const decrementAction = () => ({
    type: DECREMENT
});

export const store = createStore(counter,0, devToolsEnhancer());
