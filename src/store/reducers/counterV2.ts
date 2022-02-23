export type CounterV2Type = {
    count: number
    maxValue: number
    startValue: number
}

const InitialState: CounterV2Type = {
    count: 0,
    maxValue: 0,
    startValue: 0
}

export const counterV2 = (state: CounterV2Type = InitialState, action: ActionType): CounterV2Type => {
    switch (action.type) {
        case 'SET-COUNT-VALUE':
            return {
                ...state, count: action.value
            }
        case 'SET-MAX-VALUE':
            return {
                ...state, maxValue: action.value
            }
        case 'SET-START-VALUE':
            return {
                ...state, startValue: action.value
            }
        default:
            return state
    }
}

type ActionType = SetMaxValueAT | SetStartValueAT | SetCountValueAT

export const setCountValueAC = (value: number) => ({type: 'SET-COUNT-VALUE', value} as const)
export type SetCountValueAT = ReturnType<typeof setCountValueAC>

export const setMaxValueAC = (value: number) => ({type: 'SET-MAX-VALUE', value} as const)
export type SetMaxValueAT = ReturnType<typeof setMaxValueAC>

export const setStartValueAC = (value: number) => ({type: 'SET-START-VALUE', value} as const)
export type SetStartValueAT = ReturnType<typeof setStartValueAC>






