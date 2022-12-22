import {configureStore} from "@reduxjs/toolkit";
import {rootApi} from "./rootApi";

const apiReducers = {
    [rootApi.reducerPath]: rootApi.reducer
};

const middlewares = [rootApi.middleware];

const store = configureStore({
    reducer: {
        ...apiReducers,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(middlewares)
});
export default store;