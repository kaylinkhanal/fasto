import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import { counterSlice } from './features/counter/counterSlice'
import { boxSlice } from './features/box/boxSlice'
import { userSlice } from './features/user/userSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, combineReducers(
    {
        counter: counterSlice.reducer,
        box: boxSlice.reducer,
        user: userSlice.reducer
    }
) )

export const makeStore = () => {
    return configureStore({
        reducer: persistedReducer,
    })
}

let store = createStore(persistedReducer)
let persistor = persistStore(store)

export { store, persistor }




// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
