import createSagaMiddleware, { SagaMiddleware } from "@redux-saga/core";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';
import { rootSaga } from "./rootSaga";

export const store = () => {
    const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();
    const store: EnhancedStore = configureStore({
        reducer: rootReducer,
        middleware: [sagaMiddleware],
        preloadedState: {}
    });
    sagaMiddleware.run(rootSaga);

    return store;
};