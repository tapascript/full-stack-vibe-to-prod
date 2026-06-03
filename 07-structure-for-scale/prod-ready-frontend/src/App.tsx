import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./App.css";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
