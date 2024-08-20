
import Link from "next/link";
import { Space_Grotesk as FontSpaceGrotesk } from "@next/font/google";
import { cn } from "@/lib/utils";


const fontSpeaceGrotesk = FontSpaceGrotesk({ subsets:["latin"]});

export const Header = () => {
    return (
        <header className={cn(fontSpeaceGrotesk.className,"fixed top-0 flex justify-center  lg:justify-end w-full  font-medium")}>

            <nav className="flex flex-row">

                <Link className="hover:bg-primary  px-6 py-3" href={"/"} > <span className="text-light text-lg">Home</span></Link>        
                <Link className="hover:bg-primary  px-6 py-3"  href={"/about"} > <span className="text-light text-lg">About me</span></Link>
                <Link className="hover:bg-primary px-6 py-3" href={"/projects"} > <span className="text-light text-lg">Projects</span></Link>
                <Link className="hover:bg-primary px-6 py-3"  href={"/contact"} > <span className="text-light text-lg">Contact</span></Link>
                
            </nav>

        </header>
    );
}