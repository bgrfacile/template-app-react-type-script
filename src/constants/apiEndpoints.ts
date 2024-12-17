export const API_BASE_URL = 'https://api.example.com'; // Base de l'API
export const TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT) || 3000;

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: `/auth/login`,
        REGISTER: `/auth/register`,
        LOGOUT: `/auth/logout`,
        REFRESH: `/auth/refresh`,
    },
    USERS: {
        GET_USER: (userId: string) => `/users/${userId}`,
        UPDATE_USER: (userId: string) => `/users/${userId}`,
        DELETE_USER: (userId: string) => `/users/${userId}`,
        GET_ALL_USERS: `/users`,
    },
    POSTS: {
        GET_POSTS: `/posts`,
        GET_POST: (postId: string) => `/posts/${postId}`,
        CREATE_POST: `/posts`,
        UPDATE_POST: (postId: string) => `/posts/${postId}`,
        DELETE_POST: (postId: string) => `/posts/${postId}`,
    },
    COMMENTS: {
        GET_COMMENTS: (postId: string) => `/posts/${postId}/comments`,
        ADD_COMMENT: (postId: string) => `/posts/${postId}/comments`,
    },
};
