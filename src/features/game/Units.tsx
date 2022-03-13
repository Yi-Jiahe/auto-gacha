export interface Unit {
    name: string,
    description?: string,
    incrementRate: number,
    weight: number,
};

export const units = {
    Alpha: {
        name: "Alpha",
        incrementRate: 1,
        weight: 2,
    },
    Beta: {
        name: "Beta",
        incrementRate: 2,
        weight: 1,
    }
};

const totalWeight = Object.entries(units).reduce((acc, [_k, v]) => acc + v.weight, 0)
export const Rates = Object.fromEntries(Object.entries(units).map(([k, v]) => [k, v.weight / totalWeight]));