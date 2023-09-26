export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SERVICE_ID: any;
      REACT_APP_TEMPLATE_ID: any;
      REACT_APP_API_KEY: any;
      ENV: "test" | "dev" | "prod";
    }
  }
}
