import React from 'react';

export default function Sign() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
