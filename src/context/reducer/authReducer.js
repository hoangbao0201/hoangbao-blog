export const authReducer = (state, action) => {
    const data = action.payload;

    switch(action.type) {
        case "AUTH_LOADED_SUCCESS":
            return {
                ...state,
                authLoading: false,
                ...data,
            }
        case "AUTH_ADMIN_SUCCESS":
            return {
                ...state,
                admin: true,
            }
            
        default:
            return state
    }

}