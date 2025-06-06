import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { House, Box, PackageCheck, CircleDollarSign } from "lucide-react";

export const AppSidebar = () => {
  return (
    <>
      <div className="fixed left-0 top-0 h-screen w-60 bg-[#0F1729] p-6 flex flex-col gap-4 shadow-md z-10">
        <div className="flex flex-row items-center text-white mb-6 text-xl font-semibold">
          <img src={logo} alt="logo" className="w-15 mb-2" />
          <p>Stockify</p>
        </div>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` flex flex-row justify-start items-center px-4 py-3 my-4 rounded-md text-white text-[15px] font-[20px] transition 
          ${isActive ? "bg-slate-700 " : "hover:bg-slate-800"}`
            }
          >
            {" "}
            <House className="w-5 mr-3" /> Dasboard
          </NavLink>
          <NavLink
            to="/Financial-statement"
            className={({ isActive }) =>
              `flex flex-row justify-start items-center px-4 py-3 my-4 rounded-md text-white text-[15px] font-[20px] transition 
          ${isActive ? "bg-slate-700 " : "hover:bg-slate-800"}`
            }
          >
            <CircleDollarSign className="w-5 mr-3" />
            Finance
          </NavLink>
          <NavLink
            to="/Product"
            className={({ isActive }) =>
              `flex flex-row justify-start items-center px-4 py-3 my-4 rounded-md text-white text-[15px] font-[20px] transition 
          ${isActive ? "bg-slate-700 " : "hover:bg-slate-800"}`
            }
          >
            <PackageCheck className="w-5 mr-3" />
            Inventory
          </NavLink>
        </nav>
      </div>
    </>
  );
};
