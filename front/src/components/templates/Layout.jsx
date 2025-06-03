import { Outlet } from "react-router-dom";
import { AppHeader } from "../organisms/AppHeader";
import { AppSidebar } from "../organisms/AppSidebar";

export const Layout = () => {
  return (
    <div>
      <aside>
        <AppHeader username={"Bruel"} />
        <AppSidebar />
      </aside>
      <main className="ml-60 pt-16 p-6">
        <Outlet />
      </main>
    </div>
  );
};
