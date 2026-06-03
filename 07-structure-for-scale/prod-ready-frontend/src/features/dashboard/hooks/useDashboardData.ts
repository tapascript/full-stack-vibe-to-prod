import { useEffect, useState } from "react";
import type { Comment, CreatorStat, VideoStats } from "./types";

export function useDashboardData() {
    const [stats, setStats] = useState<CreatorStat[]>([]);
    const [videos, setVideos] = useState<VideoStats[]>([]);
    const [comments, setComments] = useState<Comment[]>([]);
    const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                // Simulating an API call
                await new Promise((resolve) => setTimeout(resolve, 1000));

                if (isMounted) {
                    setStats([
                        { label: "Views", value: "1.2M" },
                        { label: "subs", value: "45K" },
                        { label: "revenue", value: "$3,400" },
                    ]);
                    setVideos([
                        {
                            id: 1,
                            title: "Vibe Coding Explained",
                            views: "100K",
                        },
                        { id: 2, title: "React 19 Features", views: "85K" },
                    ]);
                    setComments([
                        { id: 1, text: "Great video!" },
                        { id: 2, text: "Fantastic video!" },
                    ]);
                    setIsLoading(false);
                }
            } catch (err) {
                setError(`Failed to fetch data: ${err?.message}`);
                setIsLoading(false);
            }
        };

        fetchData();
        return () => {
            isMounted = false;
        };
    }, []);

    return {
        stats,
        videos,
        comments,
        isLoading,
        error
    }

}