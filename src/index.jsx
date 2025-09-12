import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./app/store";

import "./styles/index.css";
import "./styles/gradients.css";

// Components
import { Toast } from "elseware-ui";

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={googleClientId}>
    <Provider store={store}>
      <Toast />
      <App />
    </Provider>
  </GoogleOAuthProvider>
);
