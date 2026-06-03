function Header() {
    return (
        <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
                Creator Analytics
            </h1>
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                <span className="font-semibold">Tapas Adhikary</span>
            </div>
        </header>
    );
}

export default Header;
