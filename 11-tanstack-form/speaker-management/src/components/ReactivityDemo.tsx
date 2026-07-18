import { useForm, useSelector } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ReactivityDemo() {
  const form = useForm({
    defaultValues: {
      username: "tapascript",
      bio: "",
    },
    onSubmit: async ({ value }) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Saved:", value);
    },
  });

  // SCENARIO 1: The Standalone useSelector Hook
  // Pass the form.store as the first argument, and your selector as the second.
  const isFormDirty = useSelector(form.store, (state) => state.isDirty);

  console.log("🔄 Parent Component Rendered! isFormDirty:", isFormDirty);

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 w-full max-w-md mx-auto mt-10 text-white relative overflow-hidden">

      {/* USE CASE 1 (useSelector): Global UI Changes */}
      {isFormDirty && (
        <div className="absolute top-0 left-0 w-full bg-orange-500 text-center text-xs font-bold py-1 text-white">
          Unsaved Changes!
        </div>
      )}

      <h2 className="text-xl font-bold mt-4 mb-6">Profile Settings</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-6"
      >
        <form.Field name="username">
          {(field) => (
            <div className="flex flex-col gap-2">
              <Label>Username</Label>
              <Input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="bg-neutral-950 border-neutral-700"
              />
            </div>
          )}
        </form.Field>

        <form.Field name="bio">
          {(field) => (
            <div className="flex flex-col gap-2">
              <Label>Bio</Label>
              <Input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="bg-neutral-950 border-neutral-700"
              />
            </div>
          )}
        </form.Field>

        {/* SCENARIO 2: form.Subscribe for localized rendering */}
        <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="w-full mt-4 bg-emerald-600 hover:bg-emerald-500 transition-colors"
            >
              {isSubmitting ? "Saving Profile..." : "Save Changes"}
            </Button>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
}