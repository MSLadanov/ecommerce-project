import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import App from "./App";
import { ProductPage } from "@routes/ProductPage";
import { ErrorPage } from "@routes/ErrorPage";
import { UserPage } from "@routes/UserPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductsPage } from "@routes/ProductsPage";
import { CartPage } from "@routes/CartPage";
import { CookiesProvider } from "react-cookie";
import { ProtectedRoute } from "@components/ProtectedRoute";
import "./index.css";
import "./globals.scss";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Navigate to="/products" replace />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="product" element={<ProductPage />} />
              <Route
                path="user"
                element={
                  <ProtectedRoute>
                    <UserPage />
                  </ProtectedRoute>
                }
              />
              <Route path="cart" element={<CartPage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </CookiesProvider>
  </StrictMode>
);
