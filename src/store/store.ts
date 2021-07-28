//import createSagaMiddleware, { SagaMiddleware } from "@redux-saga/core";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";

export const store = () => {
    //   const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();
    const store: EnhancedStore = configureStore({
        reducer: {},
      //  middleware: [sagaMiddleware]
        preloadedState: {}
    });
    // sagaMiddleware.run();

    return store;
};