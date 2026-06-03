export default function Sidebar() {
    return (
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
    );
}
