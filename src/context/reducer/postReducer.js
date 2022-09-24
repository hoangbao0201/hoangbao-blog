export const postReducer = (state, action) => {

    switch(action.type) {
        case "MULTIPLE_POST_LOADED_SUCCESS":
            return {
                ...state,
                postLoading: false,
                posts: action.payload
            }

        case "SINGLE_POST_LOADED_SUCCESS":
            return {
                ...state,
                postLoading: false,
                post: action.payload
            }
        case "GET_CART_LOADED_SUCCESS":
            return {
                ...state,
                postLoading: false,
                cart: [
                    ...action.payload.cart
                ]
            }
        
        default:
            return state
    }

}