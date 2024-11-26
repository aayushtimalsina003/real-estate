import React from "react";

const SignUpForm = () => {
  return (
    <form>
      <h2 className="text-xl font-bold mb-4">Create Account</h2>
      <input
        type="text"
        placeholder="Full Name"
        className="block w-full p-2 border rounded mb-4"
        required
      />
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
        className="w-full bg-green-500 text-white p-2 rounded"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignUpForm;
