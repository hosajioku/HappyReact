import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const JobSignUp = () => {
     const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [role, setRole] = useState("candidate"); // candidate | employer
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!name.trim()) return "Name is required";
    if (!/\S+@\S+\.\S+/.test(email)) return "Valid email is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    if (password !== confirm) return "Passwords do not match";
    return "";
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setError(err);
    if (err) return;
    // TODO: replace with real API call
    console.log({ name, email, password, role });
    // mock success -> navigate to sign-in
    navigate("/signin");
  };

  return (
     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        noValidate
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Create account</h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm" role="alert" aria-live="assertive">
            {error}
          </div>
        )}

        
        <label className="block mb-2 text-sm font-medium">Full name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Your full name"
          required
        />

        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="you@example.com"
          required
        />

         <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Password"
              required
            />
          </div>

           <div>
            <label className="block mb-2 text-sm font-medium">Confirm</label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Confirm password"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword((v) => !v)}
              className="mr-2"
            />
            <span className="text-sm">Show password</span>
          </label>

           <div className="ml-auto text-sm">
            <label className="mr-3">Role:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="px-2 py-1 border rounded-md"
            >
              <option value="candidate">Candidate</option>
              <option value="employer">Employer</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors mb-4"
        >
          Sign up
        </button>

         <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/signin" className="text-indigo-600 font-medium">
            Sign in
          </Link>
        </p>
      </form>
    </div>


  )
}

export default JobSignUp