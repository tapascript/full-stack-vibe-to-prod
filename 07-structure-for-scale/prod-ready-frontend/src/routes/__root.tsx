import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
    component: () => (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <header className="flex justify-between p-4 bg-white">
                <h1 className="text-5xl">
                    tapaScript | Prod-Ready Architecture
                </h1>
                <nav className="text-3xl space-x-4 m-2">
                    <Link to="/" className="[&.active]:font-bold">
                        Home
                    </Link>
                    <Link to="/about" className="[&.active]:font-bold">
                        About
                    </Link>
                </nav>
            </header>

            <main className="p-8">
                <Outlet />
            </main>
            <TanStackRouterDevtools />
        </div>
    ),
});
