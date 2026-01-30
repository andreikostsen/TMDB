import s from "./mainLayout.module.scss";
import { Header } from "../../components/ui/Header"
import { Footer } from "../../components/ui/Footer"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.content}>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};
