// 1. We define the Props interface.
// "Props" are the arguments passed into a React component.
// We are enforcing that whoever uses this component MUST pass a label and a value.
interface StatCardProps {
    label: string;
    value: string | number;
}

// 2. We extract the props cleanly using destructuring: { label, value }
function StatCard({ label, value }: StatCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                {label}
            </h3>
            <p className="text-3xl font-extrabold mt-2 text-gray-900">
                {value}
            </p>
        </div>
    );
}

export default StatCard;
