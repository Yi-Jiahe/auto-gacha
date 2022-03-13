import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UnitCounts {
    [index: string]: number
}

export interface GameState {
    money: number,
    incrementRate: number,
    units: UnitCounts,
};

const initialState: GameState = {
    money: 1200,
    incrementRate: 0,
    units: {},
};

export interface DrawResults {
    newUnits: UnitCounts,
    incrementRate: number,
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        tick: (state) => {
            state.money += state.incrementRate;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.money += action.payload;
        },
        addUnits: (state, action: PayloadAction<DrawResults>) => {
            state.money -= 120;
            state.units = Object.entries(action.payload.newUnits).reduce((acc, [key, value]) => 
                ({ ...acc, [key]: (acc[key] || 0) + value })
                , { ...state.units });
            state.incrementRate += action.payload.incrementRate;
        },
        reset: (_state) => {
            return initialState;
        }
    },
});

export const { tick, incrementByAmount, addUnits, reset } = gameSlice.actions;

export default gameSlice.reducer;
