import { createFileRoute } from "@tanstack/react-router";
import { StatePlayground } from "../features/playground/components/StatePlayground";

export const Route = createFileRoute("/state-playground")({
    component: StatePlayground,
});
