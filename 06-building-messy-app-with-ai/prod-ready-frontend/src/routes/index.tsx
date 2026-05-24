import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
export const Route = createFileRoute("/")({
    component: CreatorDashboard,
});

export default function CreatorDashboard() {
    const [stats, setStats] = useState({ views: 0, subs: 0, revenue: 0 });
    const [videos, setVideos] = useState([]);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));

                if (isMounted) {
                    setStats({ views: "1.2M", subs: "45K", revenue: "$3,400" });
                    setVideos([
                        {
                            id: 1,
                            title: "Vibe Coding Explained",
                            views: "100K",
                        },
                        { id: 2, title: "React 19 Features", views: "85K" },
                    ]);
                    setComments([{ id: 1, text: "Great video!" }]);
                    setIsLoading(false);
                }
            } catch (err) {
                setError("Failed to fetch data");
                setIsLoading(false);
            }
        };

        fetchData();
        return () => {
            isMounted = false;
        };
    }, []);

    if (isLoading)
        return (
            <div className="p-10 text-center text-xl">Loading Dashboard...</div>
        );
    if (error) return <div className="text-red-500 p-10">{error}</div>;

    return (
        <div className="flex bg-gray-100 text-gray-900 min-h-screen">
            {/* Sidebar Navigation */}
            <div className="w-64 bg-white shadow-md p-4">
                <h2 className="text-2xl font-bold mb-6 text-blue-600">
                    tapaScript
                </h2>
                <ul>
                    <li className="mb-2 p-2 bg-blue-50 text-blue-700 rounded cursor-pointer">
                        Dashboard
                    </li>
                    <li className="mb-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                        Analytics
                    </li>
                </ul>
            </div>

            <div className="flex-1 p-8">
                {/* Header */}
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Creator Analytics
                    </h1>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                        <span className="font-semibold">Tapas Adhikary</span>
                    </div>
                </header>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-gray-500 text-sm font-medium">
                            Total Views
                        </h3>
                        <p className="text-3xl font-bold mt-2">{stats.views}</p>
                    </div>
                    {/* ... more cards ... */}
                </div>

                {/* Data Table & Comments - All mashed together */}
                <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-2 bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-bold mb-4">
                            Recent Videos
                        </h2>
                        {videos.map((v) => (
                            <div key={v.id} className="border-b p-3">
                                {v.title}
                            </div>
                        ))}
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-bold mb-4">
                            Recent Comments
                        </h2>
                        {comments.map((c) => (
                            <div
                                key={c.id}
                                className="border-b p-3 text-sm text-gray-600"
                            >
                                {c.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
