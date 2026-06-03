import { createFileRoute } from "@tanstack/react-router";

import CreatorDashboard from "@/features/dashboard/CreatorDashboard";

export const Route = createFileRoute("/")({ component: CreatorDashboard });
