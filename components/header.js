export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#121429]/95 backdrop-blur-sm border-b border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div>
                        <p className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">MP</p>
                    </div>
                    <nav>
                        <ul className="flex space-x-1">
                            <li>
                                <a 
                                    className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300" 
                                    href="#my_interests"
                                >
                                    ABOUT
                                </a>
                            </li>
                            <li>
                                <a 
                                    className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300" 
                                    href="#my_projects"
                                >
                                    PROJEKTE
                                </a>
                            </li>
                            <li>
                                <a 
                                    className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300" 
                                    href="#process"
                                >
                                    PROZESS
                                </a>
                            </li>
                            <li>
                                <a 
                                    className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300" 
                                    href="#contact"
                                >
                                    KONTAKT
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}