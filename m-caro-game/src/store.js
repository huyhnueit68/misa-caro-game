import indexSlide from './reducers/index';
import { createLogger } from 'redux-logger'
import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();

const store = configureStore({
    reducer: {
        index: indexSlide
    }
}, composeWithDevTools(applyMiddleware(logger)));

export default store;