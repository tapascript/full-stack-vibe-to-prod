
import type { VideoStats } from '../types';

interface VideoTableProps {
  // We expect an array of VideoStats objects.
  videos: VideoStats[];
}

function VideoTable({ videos }: VideoTableProps) {
  if (videos.length === 0) {
    return <div className="p-6 text-center text-gray-500">No videos uploaded yet.</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100 bg-gray-50">
        <h2 className="text-lg font-bold text-gray-800">Recent Videos</h2>
      </div>
      <ul className="divide-y divide-gray-100">
        {videos.map((video) => (
          <li key={video.id} className="p-4 hover:bg-gray-50 flex justify-between items-center">
            <span className="font-medium text-gray-900">{video.title}</span>
            <span className="text-sm bg-blue-100 text-blue-800 py-1 px-3 rounded-full font-semibold">
              {video.views.toLocaleString()} views
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoTable;