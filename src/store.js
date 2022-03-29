import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./redux/reducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from "next-redux-wrapper";
import { logActions } from "./middlewares";
import thunk from "redux-thunk";

// const composeAlternativo = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composedEnhancers = composeAlternativo(applyMiddleware(thunk));

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk, logActions));

export const store = createStore(reducer,composedEnhancers);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);