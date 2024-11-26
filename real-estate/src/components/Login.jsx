import React from "react";

const LoginForm = () => {
  return (
    <form>
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="block w-full p-2 border rounded mb-4"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="block w-full p-2 border rounded mb-4"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
