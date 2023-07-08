import Link from "next/link"

const Header = () => { 

    return (    
        <header id="header" className={`flex justify-around items-center bg-mainBack h-16 w-full border-b-2 border-mainText`}>
            <div id="logo" className={`text-slate-200`}>Programador A+</div>
            <div id="menu" className="">
                <ul className="flex gap-2 text-slate-200">
                    <li className={`hover:text-sky-700`}>
                        <Link href="/main">Blog</Link>
                    </li>
                    <li className={`hover:text-sky-700 `}>
                        <Link href="/contato">Contato</Link>
                    </li>
                    <li className={`hover:text-sky-700 `}>
                        <Link href="/portfolio">Portfólio</Link>
                    </li>
                    
                </ul>
            </div>
        </header>
    )
}

export default Header