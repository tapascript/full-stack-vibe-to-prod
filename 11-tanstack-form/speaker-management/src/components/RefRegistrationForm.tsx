import { useRef } from "react";

export function RefRegistrationForm() {
  // PROBLEM 1: Ref Soup. You have to create a separate ref for EVERY single input.
  // Imagine doing this for a form with 20 fields.
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  // The Proof: This will ONLY log once on initial mount.
  // Typing will NOT trigger it. (The performance win!)
  console.log("⚡ Form Rendered (Notice it doesn't log when typing)");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // PROBLEM 2: Manual Data Extraction.
    // You have to manually stitch the object back together.
    const formData = {
      firstName: firstNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      email: emailRef.current?.value,
    };

    console.log("Submitted Data:", formData);

    // PROBLEM 3: How do you do real-time validation here?
    // Since the component doesn't re-render as you type, showing dynamic
    // error messages under the inputs becomes incredibly difficult without
    // introducing new state variables (which defeats the whole purpose of refs).
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 w-full max-w-md mx-auto mt-10 text-white">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-orange-500">The Ref Workaround</h2>
        <p className="text-sm text-neutral-400">Fast, but scales horribly.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-neutral-300">
            First Name
          </label>
          <input
            name="firstName"
            ref={firstNameRef} // Attaching the ref
            className="p-2 rounded-md bg-neutral-950 border border-neutral-700 focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-neutral-300">
            Last Name
          </label>
          <input
            name="lastName"
            ref={lastNameRef} // Attaching the ref
            className="p-2 rounded-md bg-neutral-950 border border-neutral-700 focus:border-orange-500 focus:outline-none"
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
            ref={emailRef} // Attaching the ref
            className="p-2 rounded-md bg-neutral-950 border border-neutral-700 focus:border-orange-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-orange-600 hover:bg-orange-500 py-2 rounded-md font-bold transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}