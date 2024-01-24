/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly VITE_HTTP_URL: string;
    readonly VITE_ENV: 'production' | 'development';
}
