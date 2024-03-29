import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./provider/auth-provider/AuthProvider.tsx";
import { RouterProvider } from "react-router-dom";
import MainRoute from "./routes/main-route/MainRoute.tsx";
import { TextProvider } from "./Hooks/textContext/TextContext.tsx";
// import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <HelmetProvider> */}
    <AuthProvider>
      <TextProvider>
      <div className='max-w-screen-2xl mx-auto'>

      <RouterProvider router={MainRoute} />
      </div>
      </TextProvider>
    </AuthProvider>

    {/* </HelmetProvider> */}
  </React.StrictMode>
);
