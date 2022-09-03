import { createContext, useReducer } from "react";
import { AuthContext } from "./authContext";


export const PostContext = createContext();

const PostContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AuthContext, {
        postContext: "",
        isPost: false,
        posts: [],
    })

    const createPost = async (data) => {
        try {
            
        } catch (error) {
            
        }
    }

    const dataPostContext = {
        createPost,
        state
    }
    return <PostContext.Provider value={dataPostContext}>
        {children}
    </PostContext.Provider>
}

export default PostContextProvider;