export const postReducer = (state, action) => {

    switch(action.type) {
        case "SET_POST":
            return {
                ...state
            }
        
        default:
            return state
    }

}