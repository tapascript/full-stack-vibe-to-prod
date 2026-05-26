import { createFileRoute } from "@tanstack/react-router";
import { EffectPlayground } from "../features/playground/components/EffectPlayground";

export const Route = createFileRoute("/effect-playground")({
    component: EffectPlayground,
});
