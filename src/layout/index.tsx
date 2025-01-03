import { NavLink, Outlet } from "react-router-dom";
import { Routes } from "../routes/routes";

const AppLayout = () => {
  return (
    <main className="text-white overflow-x-hidden relative w-screen h-screen">
      <header className="bg-gray-600 sticky left-0 top-0 z-50 h-[10vh] flex items-center justify-center">
        <nav className="px-10 xl:px-0 max-w-[1200px] mx-auto w-full">
          <ul className="flex items-center justify-between">
            <li>
              <NavLink to={Routes.users}>NoLimitBuzz</NavLink>
            </li>
            <li>
              <NavLink to={Routes.users}>Users</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className="px-10 xl:px-0 max-w-[1200px] mx-auto">
        <Outlet />
      </section>
    </main>
  );
};

export default AppLayout;
