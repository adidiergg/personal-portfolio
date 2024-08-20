import Image from "next/image";
import { Space_Grotesk as FontSpaceGrotesk } from "@next/font/google";
import { cn } from "@/lib/utils";
const fontSpeaceGrotesk = FontSpaceGrotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-start justify-center gap-8">
      <h1
        className={cn(
          fontSpeaceGrotesk.className,
          "text-6xl font-bold text-light"
        )}
      >
       Hello everone!<span>👋</span>
      </h1>
      <h1
        className={cn(
          fontSpeaceGrotesk.className,
          "text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-ternary inline-block text-transparent bg-clip-text"
        )}
      >
       <span className="text-light">My name is   </span>
        Didier 
    
      </h1>
      <h1
        className={cn(
          fontSpeaceGrotesk.className,
          "text-6xl font-bold  bg-gradient-to-r from-primary via-secondary to-ternary inline-block text-transparent bg-clip-text"
        )}
      >
        <span className="text-light"> I&#39;m a </span>
        Junior Software enginner
      </h1>
    </main>
  );
}
