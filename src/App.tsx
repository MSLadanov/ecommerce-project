import { Header } from "@components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router";
import { Notify } from "@components/ui/Notify";
import { useNotify } from "@hooks/useNotify";
import { NotifyContext } from "./contexts/NotifyContext";
import "./App.css";

function App() {
  const { notifyRef, isNotifyShowed, notifyType, notifyText, toggleNotify } =
    useNotify({ delay: 3000 });
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
  return (
    <NotifyContext value={{ toggleNotify }}>
      <Header />
      <Outlet />
      <Footer />
      <Notify
        ref={notifyRef}
        notifyVisibility={isNotifyShowed}
        notifyType={notifyType}
        notifyText={notifyText}
      />
    </NotifyContext>
  );
}

export default App;
