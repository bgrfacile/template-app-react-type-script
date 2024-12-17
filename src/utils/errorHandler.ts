import {ApiErrorResponse} from "@/types/ApiErrorResponse.ts";

export const handleApiError = (error: unknown) => {
    if (typeof error === 'object' && error !== null && 'response' in error) {
        const apiError = error as ApiErrorResponse;
        const message = apiError.response?.data?.message || 'Une erreur est survenue';
        console.error('API Error:', message);
        alert(`Erreur : ${message}`);
    } else {
        console.error('Unknown Error:', error);
        alert('Une erreur inconnue est survenue');
    }
};