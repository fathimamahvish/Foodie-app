import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PayPalScriptProvider
    options={{
      "client-id": "AQpzLmt4cmcyTpw1Dr_yVQtq5cvZlj0wegVYzUwK8PQy-0rdRMMmsYHAIObyJOtk24SXd4GnDfX9c7SK",
      currency: "USD"
    }}
  >
    <CartProvider>
      <App />
    </CartProvider>
  </PayPalScriptProvider>
);


