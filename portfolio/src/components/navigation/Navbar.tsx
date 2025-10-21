import Link from "next/link"

const navlinks = [
    {label:"home",href:"#home"},
    {label:"about",href:"#about"},
    {label:"skills",href:"#skills"},
    {label:"projects",href:"#projects"},
    {label:"contact",href:"#contact"},
]
export default function Navbar(){
    return(
        <>
        <header className="fixed top-1 left-1 right-1 p-2 rounded-md shadow backdrop-blur-sm bg-black/10 z-100">
            <nav className="w-full flex items-center justify-between ">
                <Link href="/" className="flex items-center justify-start gap-0">
                    <h1 className="text-[35px] font-extrabold uppercase text-blue-600 font-mono">E</h1>
                    <h1 className="text-[35px] font-extrabold uppercase text-blue-600 font-mono">k</h1>
                </Link>
                <div className="flex items-center justify-end gap-6 pr-4">
                    {navlinks.map((link,index)=>(
                        <a 
                        key={index} 
                        className="text-white text-lg font-bold capitalize transition-all duration-300 ease-in-out hover:text-blue-600"
                        href={link.href}>{link.label}</a>
                    ))}
                </div>
            </nav>
        </header>
        </>
    )
}