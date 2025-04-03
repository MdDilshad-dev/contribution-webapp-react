import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <nav className="flex flex-col gap-2">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) =>
            `p-2 rounded ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/profile" 
          className={({ isActive }) =>
            `p-2 rounded ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
          }
        >
          Profile
        </NavLink>
        <NavLink 
          to="/settings" 
          className={({ isActive }) =>
            `p-2 rounded ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
          }
        >
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
