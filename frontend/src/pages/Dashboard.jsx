import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-700">Dashboard</h2>
        {/* <nav className="mt-6">
          <ul className="space-y-3">
            <li><Link to="/dashboard" className="block p-3 rounded-md bg-blue-500 text-white">Home</Link></li>
            <li><Link to="/profile" className="block p-3 rounded-md hover:bg-gray-200">Profile</Link></li>
            <li><Link to="/settings" className="block p-3 rounded-md hover:bg-gray-200">Settings</Link></li>
          </ul>
        </nav> */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Welcome, {user?.email}!</h1>
        <p className="text-gray-600 mt-2">This is your dashboard.</p>

        <button 
          onClick={handleLogout} 
          className="mt-6 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
          Logout
        </button>
      </main>
    </div>
  );
};

export default Dashboard;
