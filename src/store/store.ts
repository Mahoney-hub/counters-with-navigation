import {applyMiddleware, combineReducers, createStore} from 'redux';
import {counterV1} from './reducers/counterV1';
import {counterV2} from './reducers/counterV2';
import thunk from 'redux-thunk';
import {loadState} from '../utils/localstorage';

const rootReducer = combineReducers({
    counterV1: counterV1,
    counterV2: counterV2,
})

export const store = createStore(rootReducer, {counterV2: loadState()}, applyMiddleware(thunk))

store.subscribe(() => {
    localStorage.setItem('counterV2', JSON.stringify(store.getState().counterV2))
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store

