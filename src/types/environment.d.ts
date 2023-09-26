export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SERVICE_ID: string;
      REACT_APP_TEMPLATE_ID: string;
      REACT_APP_API_KEY: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
