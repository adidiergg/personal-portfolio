import Image from "next/image";
import { Space_Grotesk as FontSpaceGrotesk } from "@next/font/google";
import { cn } from "@/lib/utils";
const fontSpeaceGrotesk = FontSpaceGrotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={cn(fontSpeaceGrotesk.className,"flex   flex-col min-h-[calc(100vh-48px)] justify-start  lg:justify-center gap-8 pt-12 lg:pt-0")}>

      <div  className="flex flex-col gap-3">
      <h1
        className="text-4xl lg:text-5xl font-bold text-light"
      >
       Hello! <span>👋</span>
      </h1>
      <h1
        className="text-4xl lg:text-5xl  font-bold bg-gradient-to-r from-primary via-secondary to-ternary inline-block text-transparent bg-clip-text"

      >
       <span className="text-light">My name is   </span>
        Didier 
    
      </h1>
      <h1
        className="text-4xl lg:text-5xl  font-bold  bg-gradient-to-r from-primary via-secondary to-ternary inline-block text-transparent bg-clip-text"
      
      >
        <span className="text-light"> I&#39;m a </span>
        Junior Software enginner
      </h1>
      </div>
    </main>
  );
}
