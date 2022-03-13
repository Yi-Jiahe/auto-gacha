export interface Unit {
    description?: string,
    incrementRate: number,
    weight: number,
};

export const units = {
    "Alpha": {
        incrementRate: 1,
        weight: 4,
    },
    "Beta": {
        incrementRate: 2,
        weight: 2,
    },
    "Delta": {
        incrementRate: 2.5,
        weight: 1.5,
    },
    "Gamma": {
        incrementRate: 3,
        weight: 1,
    },
};

const totalWeight = Object.entries(units).reduce((acc, [_k, v]) => acc + v.weight, 0)
export const Rates = Object.fromEntries(Object.entries(units).map(([k, v]) => [k, v.weight / totalWeight]));