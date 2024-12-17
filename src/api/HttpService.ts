import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { handleApiError } from '@/utils/errorHandler';
import {API_BASE_URL, TIMEOUT} from "@/constants/apiEndpoints.ts";
import {ManifestApp} from "@/constants/manifestApp.ts";

class HttpService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: API_BASE_URL,
            timeout: TIMEOUT,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-App-Name': ManifestApp.APP_NAME,
                'X-App-Version': ManifestApp.APP_VERSION,
            },
        });

        // Intercepteur de requête
        this.axiosInstance.interceptors.request.use((config) => {
            const token = localStorage.getItem('token');
            if (token) config.headers.Authorization = `Bearer ${token}`;
            return config;
        });

        // Intercepteur de réponse
        this.axiosInstance.interceptors.response.use(
            (response) => response,
            (error) => {
                handleApiError(error); // Gestion globale des erreurs
                return Promise.reject(error);
            }
        );
    }

    public get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.get<T>(url, config);
    }

    public post<T, B = object>(url: string, data?: B, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.post<T>(url, data, config);
    }

    public put<T, B = object>(url: string, data?: B, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.put<T>(url, data, config);
    }

    public patch<T, B = object>(url: string, data?: B, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.patch<T>(url, data, config);
    }

    public delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.delete<T>(url, config);
    }
}

export default new HttpService();
