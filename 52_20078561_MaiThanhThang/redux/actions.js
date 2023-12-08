export const setData = (money) => {
    return {
        type: "setData",
        payload: money,
    };
};

export const addIn = (income) => {
    return {
        type: "add-in",
        payload: income,
    };
};

export const addOut = (outcome) => {
    return {
        type: "add-out",
        payload: outcome,
    };
};