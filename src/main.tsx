import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import App from "./App";
import { ProductPage } from "@routes/ProductPage";
import { ProductsList } from "@components/ProductsList";
import { ErrorPage } from "@routes/ErrorPage";
import { UserPage } from "@routes/UserPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";
import './globals.scss'

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Navigate to="/products" replace />} />
              <Route path="products" element={<ProductsList />} />
              <Route path="products/:id" element={<ProductPage />} />
              <Route path="user/:id" element={<UserPage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
