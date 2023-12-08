const initialState = {
    money: {
        id: "",
        email: "",
        password: "",
        money_in: [{ content: "", amount: "" }],
        money_out: [{ content: "", amount: "" }],
    },
    selectIn: [{ content: "", amount: "" }],
    selectOut: [{ content: "", amount: "" }],
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setData":
            return {
                ...state,
                money: { ...action.payload },
            };
        case "add-in":
            return {
                ...state,
                money: {
                    ...state.money,
                    money_in:
                    [...state.money.money_in, action.payload],
                },
            };
        default: 
            return state;    
    }
}
export default appReducer;