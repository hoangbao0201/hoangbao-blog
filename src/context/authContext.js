import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "~/constants";
import setAuthToken from "~/utils/setAuthToken";
import { authReducer } from "./reducer/authReducer";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        admin: false,
        authLoading: true,
        isAuthenticated: false,
        user: null,
    });

    const loadUser = async () => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
        }

        try {
            const response = await axios.get(`${apiUrl}/auth`);
            if (response.data.success) {
                dispatch({
                    type: "AUTH_LOADED_SUCCESS",
                    payload: {
                        authLoading: false,
                        isAuthenticated: true,
                        user: response.data.user,
                    },
                });

                if (response.data.admin) {
                    dispatch({
                        type: "AUTH_ADMIN_SUCCESS",
                    });
                }
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
            setAuthToken(null);
            dispatch({
                type: "AUTH_LOADED_SUCCESS",
                payload: {
                    isAuthenticated: false,
                    user: null,
                    admin: false,   
                },
            });
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    const registerUser = async (data) => {
        try {
            const response = await axios.post(`${apiUrl}/auth/register`, data);
            if (response.data.success) {
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    response.data.accessToken
                );
            }

            await loadUser();

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

    const loginUser = async (data) => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, data);
            if (response.data.success) {
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    response.data.accessToken
                );
            }

            await loadUser();

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

    const logoutUser = () => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
        dispatch({
            type: "AUTH_LOADED_SUCCESS",
            payload: {
                isAuthenticated: false,
                user: null,
            },
        });
    };

    const updateUser = async (data) => {
        try {
            const response = await axios.post(`${apiUrl}/auth/update`, data);
            if (response.data.success) {
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    response.data.accessToken
                );
            }
            await loadUser();

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

    const uploadAvatar = async (data, option) => {
        try {
            const response = await axios.post(
                `${apiUrl}/auth/upload-avatar`,
                data,
                option
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

    const dataAuthContext = {
        state,
        registerUser,
        loginUser,
        logoutUser,
        updateUser,
        uploadAvatar,
    };
    return (
        <AuthContext.Provider value={dataAuthContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
