import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy login logic
    navigate("/"); // Redirect to Home
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg w-96 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleLogin}
          className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 font-bold"
        >
          Login
        </button>
      </div>
    </div>
  );
}