import {AppStateType} from '../store/store';

// Функция для получения данных localstorage
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('counterV2');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState)

    } catch (err) {
        return undefined;
    }
}

// Функция для сохранения localstorage
export const saveState = (state: AppStateType) => {
    try {
        const serializedState = localStorage.stringify(state);
        localStorage.setItem('state', serializedState)
    } catch {
        // ignore write errors
    }
}



