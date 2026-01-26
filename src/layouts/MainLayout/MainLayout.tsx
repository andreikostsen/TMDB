import type { ReactNode } from "react";

import s from "./mainLayout.module.scss";
import { Header } from "../../components/ui/Header"
import { Footer } from "../../components/ui/Footer"

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.content}>{children}
        <Footer />
      </main>
    </div>
  );
};
