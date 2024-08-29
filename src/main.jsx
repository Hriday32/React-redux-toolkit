import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/Store.jsx";
import Dolor from "./Features/dolor/dolor.jsx";
import Theme from "./Features/theme/theme.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Dolor />
      <Theme />
    </Provider>
  </StrictMode>
);
