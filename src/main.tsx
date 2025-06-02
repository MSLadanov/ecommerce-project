import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import App from "./App";
import { ProductPage } from "@routes/ProductPage";
import { ProductsList } from "@components/ProductsList";
import { ErrorPage } from "@routes/ErrorPage";
import { UserPage } from "@routes/UserPage";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
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
  </StrictMode>
);
