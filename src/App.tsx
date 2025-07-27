import { Header } from "@components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router";
import "./App.css";

function App() {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
