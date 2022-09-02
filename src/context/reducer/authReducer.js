export const authReducer = (state, action) => {
    const data = action.payload;
    switch(action.type) {
        case "SET_AUTH":
            return {
                ...state,
                authLoading: false,
                ...data,
            }
            
        default:
            return {
                ...state
            }
    }

}