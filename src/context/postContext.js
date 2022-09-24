import axios from "axios";
import { createContext, useReducer } from "react";
import { apiUrl } from "~/constants";
import { postReducer } from "./reducer/postReducer";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postReducer, {
        post: null,
        postLoading: true,
        posts: [],
        cart: [],
    });

    // Get all posts
    const getAllPosts = async (data) => {
        try {
            const response = await axios.get(
                `${apiUrl}/post/get-multiple-posts`
            );

            if (response.data.success) {
                dispatch({
                    type: "MULTIPLE_POST_LOADED_SUCCESS",
                    payload: response.data.posts,
                });
            }

            return response.data;
        } catch (error) {
            if (error.response.data) {
                return error.response.data;
            } else {
                return {
                    success: false,
                    msg: error.message,
                };
            }
        }
    };

    // Get post
    const getPost = async (data) => {
        try {
            const response = await axios.get(
                `${apiUrl}/post/get-single-product/${data}`
            );

            if (response.data.success) {
                dispatch({
                    type: "SINGLE_POST_LOADED_SUCCESS",
                    payload: response.data.product,
                });
            }

            return response.data;
        } catch (error) {
            if (error.response.data) {
                return error.response.data;
            } else {
                return {
                    success: false,
                    msg: error.message,
                };
            }
        }
    };

    // Create post
    const createPost = async (data) => {
        try {
            const response = await axios.post(`${apiUrl}/post/create`, data);

            return response.data;
        } catch (error) {
            if (error.response.data) {
                return error.response.data;
            } else {
                return {
                    success: false,
                    msg: error.message,
                };
            }
        }
    };

    const uploadSingleImage = async (data) => {
        try {
            const formData = new FormData();
            formData.append("file", data);

            const response = await axios.post(
                `${apiUrl}/post/upload-single-image`,
                formData
            );

            return response.data;
        } catch (error) {
            if (error.response.data) {
                return error.response.data;
            } else {
                return {
                    success: false,
                    msg: error.message,
                };
            }
        }
    };

    const uploadMultipleImages = async (data) => {
        try {
            const formData = new FormData();
            for (let i = 0; i < data.length; i++) {
                formData.append("files", data[i]);
            }

            const response = await axios.post(
                `${apiUrl}/post/upload-multiple-images`,
                formData
            );

            return response.data;
        } catch (error) {
            if (error.response.data) {
                return error.response.data;
            } else {
                return {
                    success: false,
                    msg: error.message,
                };
            }
        }
    };

    const deletePost = async (data) => {
        try {
            const response = await axios.delete(
                `${apiUrl}/post/delete-single-post/${data}`
            );

            return response.data;
        } catch (error) {
            if (error.response.data) {
                return error.response.data;
            } else {
                return {
                    success: false,
                    msg: error.message,
                };
            }
        }
    };

    const buyProduct = async (data) => {
        try {
            const response = await axios.post(
                `${apiUrl}/cart/buy-product`,
                data
            );

            return response.data;
        } catch (error) {
            if (error.response.data) {
                return error.response.data;
            } else {
                return {
                    success: false,
                    msg: error.message,
                };
            }
        }
    };

    const getCart = async () => {
        try {
            const response = await axios.get(
                `${apiUrl}/cart/get-cart`
            );

            dispatch({
                type: "GET_CART_LOADED_SUCCESS",
                payload: {
                    postLoading: false,
                    cart: response.data.cart
                }
            })

            return response.data;
        } catch (error) {
            if (error.response.data) {
                return error.response.data;
            } else {
                return {
                    success: false,
                    msg: error.message,
                };
            }
        }
    };

    const deleteCart = async (data) => {
        try {
            const response = await axios.delete(`${apiUrl}/cart/delete-cart/${data}`);

            return response.data;
        } catch (error) {
            if (error.response.data) {
                return error.response.data;
            } else {
                return {
                    success: false,
                    msg: error.message,
                };
            }
        }
    }

    const dataPostContext = {
        state,
        getPost,
        getAllPosts,
        createPost,
        uploadSingleImage,
        uploadMultipleImages,
        deletePost,
        getCart,
        buyProduct,
        deleteCart,
    };
    return (
        <PostContext.Provider value={dataPostContext}>
            {children}
        </PostContext.Provider>
    );
};

export default PostContextProvider;
