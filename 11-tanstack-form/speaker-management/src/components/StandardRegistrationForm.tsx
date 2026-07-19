import { useState } from "react";

export function StandardRegistrationForm() {
  // 1. The massive, centralized state object
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // THE PROOF: This will fire on EVERY single keystroke in ANY input
  console.log("🔥 Form Re-rendered! Current state:", formData.firstName);

  // 2. The generic handler that updates the parent state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 w-full max-w-md mx-auto mt-10 text-white">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-red-500">The Problem</h2>
        <p className="text-sm text-neutral-400">Standard Controlled Form</p>
      </div>

      <form className="space-y-4">
        {/* First Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-neutral-300">
            First Name
          </label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="p-2 rounded-md bg-neutral-950 border border-neutral-700 focus:border-red-500 focus:outline-none"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-neutral-300">
            Last Name
          </label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="p-2 rounded-md bg-neutral-950 border border-neutral-700 focus:border-red-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-neutral-300">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded-md bg-neutral-950 border border-neutral-700 focus:border-red-500 focus:outline-none"
          />
        </div>

        <button
          type="button"
          className="w-full mt-4 bg-neutral-800 text-neutral-400 py-2 rounded-md font-bold cursor-not-allowed"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}