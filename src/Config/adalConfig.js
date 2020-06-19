import { AuthenticationContext, adalFetch, withAdalLogin } from "react-adal";

export const AdalConfig = {
  clientId: "5ed5efbc-3ed6-42fb-97d2-f1a12af75030",
  tenant: "696c6efb-56c9-408f-9fd8-f4b1fb893b2d",
  redirectUri: "http://localhost:8080",
  endpoints: {
    api: "https://notsmooth.crm.dynamics.com/",
  },
  cacheLocation: "localStorage",
  //secret: "~8A.kP~IqxjC64_pCVICcR38pQIuJ13N6T",
};

export const authContext = new AuthenticationContext(AdalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, AdalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(
  authContext,
  AdalConfig.endpoints.api
);
