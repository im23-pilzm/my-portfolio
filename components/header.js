export default function Header() {
    return (
        <header className="flex justify-between bg-[#121429] text-white border-b-1 border-b-white border-b-solid items-center">
            <div><p className="py-3">LOGO</p></div>
            <nav>
                <ul className="flex m-0 p-0">
                    <li>
                        <a className="px-5 py-3 border-l-1 boder-l-white border-l-solid block" href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a className="px-5 py-3 border-l-1 boder-l-white border-l-solid block" href="#project">PROJEKTE</a>
                    </li>
                    <li>
                        <a className="px-5 py-3 border-l-1 boder-l-white border-l-solid block" href="#process">PROZESS</a>
                    </li>
                    <li>
                        <a className="px-5 py-3 border-l-1 boder-l-white border-l-solid block" href="#contact">KONTAKT</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}