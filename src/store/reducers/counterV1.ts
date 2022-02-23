export type CounterV1Type = {
    value: number
}

const InitialState: CounterV1Type = {
    value: 0
}

export const counterV1 = (state: CounterV1Type = InitialState, action: ActionType): CounterV1Type => {
    switch (action.type) {
        case 'INCR-VALUE':
            return {
                ...state, value: state.value + 1
            }
        case 'RESET-VALUE':
            return {
                ...state, value: 0
            }
        default:
            return state
    }
}

type ActionType = ChangeValueAT | ResetValueAT

export const changeValueAC = () => ({type: 'INCR-VALUE'} as const)
export type ChangeValueAT = ReturnType<typeof changeValueAC>

export const resetValueAC = () => ({type: 'RESET-VALUE'} as const)
export type ResetValueAT = ReturnType<typeof resetValueAC>
