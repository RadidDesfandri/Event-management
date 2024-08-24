import { combineReducers, configureStore } from "@reduxjs/toolkit"
import createWebStorage from "redux-persist/lib/storage/createWebStorage"
import userSlice from "./slice/userSlice"
import {
    REHYDRATE,
    PERSIST,
    REGISTER,
    persistReducer,
} from "redux-persist";
import { Persistor } from "redux-persist";
import { persistStore } from "redux-persist";


const createNoopStorage = () => {
    return {
        getItem() {
            return Promise.resolve(null)
        },
        setItem(_key: string, value: number) {
            return Promise.resolve(value)
        },
        removeItem() {
            return Promise.resolve()
        }
    }
}

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage()

const persistConfig = {
    key: "store",
    storage,
    timeout: 2000
}

const rootReducer = combineReducers({
    user: userSlice
})

const makeConfigureStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [
                        REHYDRATE,
                        PERSIST,
                        REGISTER,
                    ],
                },
            }),
    });

type StoreWithPersistor = ReturnType<typeof makeConfigureStore> & {
    __persistor?: Persistor;
};

export const makeStore = () => {
    const isServer = typeof window === "undefined"
    if (isServer) {
        return makeConfigureStore()
    } else {
        const persistedReducer = persistReducer(persistConfig, rootReducer)
        let store = configureStore({
            reducer: persistedReducer,
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware({
                    serializableCheck: {
                        ignoredActions: [REHYDRATE, PERSIST, REGISTER,],
                    },
                }),
        }) as StoreWithPersistor
        store.__persistor = persistStore(store)
        return store
    }
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];