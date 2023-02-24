import axios, { AxiosInstance, AxiosStatic } from "axios";
import Cookies from "js-cookie";

let isInstalledOnStaticObject = false;
export const installInterceptor = (axios: AxiosInstance | AxiosStatic) => {
    axios.interceptors.request.use(
        async (config) => {
            config.baseURL = "http://viaq.ir/api/" ;
            config.headers= { 
                'Content-Type': 'application/json',
                'r-auth-token' : Cookies.get("jwt") || "" ,
                'x-auth-token' : Cookies.get("accessToken") || "" 
              };
            return config;
        },
        (error) => Promise.reject(error)
    );

    axios.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            return Promise.reject(error);
        }
    );
};

if (!isInstalledOnStaticObject) {
    isInstalledOnStaticObject = true;
    installInterceptor(axios);
}
