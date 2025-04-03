import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ProfileSettings from "./pages/ProfileSettings";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <div className="flex">
          <Sidebar />
          {/* <Dashboard /> */}
          <div className="flex-1 p-4">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* <Route path="/profile-settings" element={<ProfileSettings />} /> */}
        {/* Protected Route */}
        {/* <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} /> */}
        <Route element={<ProtectedRoute element={<Layout />}/>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
        </Route>
        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
     
      </Routes>
      </div>
      </div>
    </AuthProvider>
  );
}

export default App;
