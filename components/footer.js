export default function Footer() {
    return (
        <footer className="w-full bg-[#121429]/95 backdrop-blur-sm border-t border-white/10">
            <div className="container mx-auto px-4">
                <nav className="py-6">
                    <ul className="flex items-center justify-center space-x-8">
                        <li>
                            <a 
                                className="text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300" 
                                href="/datasecurity/page"
                            >
                                DATASECURITY
                            </a>
                        </li>
                        <li>
                            <a 
                                className="text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300" 
                                href="/impressum/page"
                            >
                                IMPRESSUM
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="py-4 text-center">
                    <p className="text-xs text-white/60">
                        © {new Date().getFullYear()} Maximilian Pilz. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}