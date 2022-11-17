import { configureStore } from '@reduxjs/toolkit'
import { gameApi } from './gameAPI'

export const store = configureStore({
    reducer: {
        [gameApi.reducerPath]: gameApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat(gameApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch