import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
export function SpeakerForm() {
    console.log("Rendering Parent Form Component");
    const form = useForm({
        defaultValues: {
            speakers: [{ firstName: "", lastName: "" }],
        },
        validatorAdapter: zodValidator(), // Injecting the Zod engine
        onSubmit: async ({ value }) => {
            console.log("Form Submitted!", value.speakers);
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
                <form.Field name="speakers" mode="array">
                    {(field) => (
                        <div className="space-y-6 text-white">
                            {field.state.value.map((_, index) => (
                                <div
                                    key={index}
                                    className="p-4 border border-neutral-800 rounded-lg bg-neutral-950 relative"
                                >
                                    <h3 className="text-sm font-bold text-neutral-400 mb-4 uppercase">
                                        Speaker {index + 1}
                                    </h3>

                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Nested Field Configuration */}
                                        <form.Field
                                            name={`speakers[${index}].firstName`}
                                        >
                                            {(subField) => (
                                                <div>
                                                    <Label className="mb-2">First Name</Label>
                                                    <Input
                                                        value={
                                                            subField.state.value
                                                        }
                                                        onChange={(e) =>
                                                            subField.handleChange(
                                                                e.target.value,
                                                            )
                                                        }
                                                    />
                                                </div>
                                            )}
                                        </form.Field>

                                        <form.Field
                                            name={`speakers[${index}].lastName`}
                                        >
                                            {(subField) => (
                                                <div>
                                                    <Label className="mb-2">Last Name</Label>
                                                    <Input
                                                        value={
                                                            subField.state.value
                                                        }
                                                        onChange={(e) =>
                                                            subField.handleChange(
                                                                e.target.value,
                                                            )
                                                        }
                                                    />
                                                </div>
                                            )}
                                        </form.Field>
                                    </div>

                                    {/* Dynamic Removal Utility */}
                                    {field.state.value.length > 1 && (
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            size="sm"
                                            className="absolute top-2 right-2"
                                            onClick={() =>
                                                field.removeValue(index)
                                            }
                                        >
                                            Remove
                                        </Button>
                                    )}
                                </div>
                            ))}

                            {/* Dynamic Insertion Utility */}
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full border-dashed border-neutral-700 text-neutral-900"
                                onClick={() =>
                                    field.pushValue({
                                        firstName: "",
                                        lastName: "",
                                    })
                                }
                            >
                                + Add Another Speaker
                            </Button>
                        </div>
                    )}
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
