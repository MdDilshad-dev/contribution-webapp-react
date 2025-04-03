import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { mockSignup } from "../services/mockApi";
import { toast } from "react-hot-toast"; // For notifications

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    //setError(null);

    // try {
    //   const response = await fetch("https://your-api.com/auth/signup", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await response.json();

    //   if (!response.ok) {
    //     throw new Error(data.message || "Signup failed");
    //   }

    //   localStorage.setItem("token", data.token);
    //   setUser({ token: data.token });
    //   navigate("/dashboard"); // Redirect to dashboard after signup
    // } catch (err) {
    //   setError(err.message);
    // }
    try {
      // Use mock API instead of actual fetch
      const data = await mockSignup(formData.name,formData.email, formData.password);

      localStorage.setItem("token", data.token);
      setUser({ token: data.token });
      toast.success("Signup successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1000); // Redirect after signup
    } catch (err) {
      setError(err.message);
      toast.error("Signup failed!");
    } finally {
      setLoading(false);
    }
  };
console.log(loading,'loading');
return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Create an Account</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} 
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} 
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} 
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        <button type="submit" 
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-bold hover:bg-blue-600 transition">
          Sign Up
        </button>
      </form>
      <p className="text-gray-500 text-center mt-4">
        Already have an account? <a href="/login" className="text-blue-500">Login</a>
      </p>
    </div>
  </div>
);
};

export default Signup;
