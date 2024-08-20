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
          "text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-secondary inline-block text-transparent bg-clip-text"
        )}
      >
       <span className="text-light">Hi, my name is   </span>
        Didier 
    
      </h1>
      <h1
        className={cn(
          fontSpeaceGrotesk.className,
          "text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-secondary inline-block text-transparent bg-clip-text"
        )}
      >
        <span className="text-light"> I'm a </span>
        Junior Software enginner{" "}
      </h1>
    </main>
  );
}
