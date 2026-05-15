import { createFileRoute } from "@tanstack/react-router";
import { Playground } from "../features/playground/components/Playground";

export const Route = createFileRoute("/components-playground")({
    component: Playground,
});


