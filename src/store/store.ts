import {combineReducers, createStore} from 'redux';
import {counterV1} from './reducers/counterV1';
import {counterV2} from './reducers/counterV2';

const rootReducer = combineReducers({
    counterV1: counterV1,
    // counterV2: counterV2,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

export type AppStoreType = typeof store

