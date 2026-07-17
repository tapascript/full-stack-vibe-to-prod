import { useForm } from "@tanstack/react-form";

export function SpeakerForm() {
    console.log("Rendering Parent Form Component");
    // We initialize our form instance and define its strict default shape
    const form = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            twitterHandle: "",
        },
        onSubmit: async ({ value }) => {
            console.log("Form Submitted!", value);
        },
    });

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 w-full max-w-md mx-auto mt-10">
            <h2 className="text-xl font-bold text-white mb-6">
                Add New Speaker
            </h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
                className="space-y-4"
            >
                {/* The Field Component */}
                <form.Field name="firstName">
                    {(field) => {
                        // PROOF: This log will only fire when firstName changes!
                        console.log("Rendering First Name Field");

                        return (
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor={field.name}
                                    className="text-sm font-medium text-neutral-300"
                                >
                                    First Name
                                </label>
                                <input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) =>
                                        field.handleChange(e.target.value)
                                    }
                                    className="p-2 rounded-md bg-neutral-950 border border-neutral-700 text-white focus:border-emerald-500 focus:outline-none"
                                />
                            </div>
                        );
                    }}
                </form.Field>

                <button
                    type="submit"
                    className="w-full mt-4 bg-emerald-600 hover:bg-emerald-500 py-2 rounded-md font-bold transition-colors"
                >
                    Save Speaker
                </button>
            </form>
        </div>
    );
}
