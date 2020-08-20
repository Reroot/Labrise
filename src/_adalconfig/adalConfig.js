import { AuthenticationContext, adalFetch, withAdalLogin } from "react-adal";

export const AdalConfig = {
  // clientId: "5ed5efbc-3ed6-42fb-97d2-f1a12af75030", //Will's
  // clientId: "e5e83063-a74f-4dff-8f4e-1f3eee933ba5", //mine
  // clientId: "f38edcbf-d2dc-4fba-a062-fa21e0ff63af",  //mine #2
  clientId: "e017e622-e241-4440-956e-0d234ceb5af0",  //new one

  // tenant: "696c6efb-56c9-408f-9fd8-f4b1fb893b2d",  //Will's
  // tenant: "80d47f88-aff4-4039-941f-a8e98aa65729",  //mine
  tenant: "28b8364e-2ebf-4bcb-b72c-8db39f6cc18d",  //new one
  redirectUri: "http://localhost:8080",
  endpoints: {
    // api: "https://notsmooth.crm.dynamics.com/",  //Will's
    // api: "https://notsuave.crm.dynamics.com/",  //mine
    api: "https://bumpystack.crm.dynamics.com/",  //new one
  },
  cacheLocation: "localStorage",
  
  //secret: "~8A.kP~IqxjC64_pCVICcR38pQIuJ13N6T", //Will's
  // secret: "6P8_8wM~e1.xN~egwR_0ILwl1.xvrSk7-i", //mine
  // secret: "OlPrN41z40yNSkfrwt8u5~8IJ.p9.I-16R", //new one
  
};

export const authContext = new AuthenticationContext(AdalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, AdalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(
  authContext,
  AdalConfig.endpoints.api
);
