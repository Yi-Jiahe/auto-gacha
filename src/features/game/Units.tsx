export interface Unit {
    description?: string,
    incrementRate: number,
    weight: number,
};

export const units = {
    "The": {
        incrementRate: 1,
        weight: 100000,
    },
    "Secret": {
        incrementRate: 5,
        weight: 10000,
    },
    "Word": {
        incrementRate: 25,
        weight: 1000,
    },
    "Is": {
        incrementRate: 100,
        weight: 100,
    },
    "...": {
        incrementRate: 300,
        weight: 10,
    },
    "Nothing": {
        incrementRate: 500,
        weight: 1,
    }
};

const totalWeight = Object.entries(units).reduce((acc, [_k, v]) => acc + v.weight, 0)
export const Rates = Object.fromEntries(Object.entries(units).map(([k, v]) => [k, v.weight / totalWeight]));