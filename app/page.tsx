import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full bg-slate-950 text-white flex flex-col justify-center items-center">
      <div className="space-y-4">
        <div className="italic text-5xl font-bold">Family Pic</div>
        <Button asChild className="bg-red-900 hover:bg-red-500/80">
          <Link href="/">Log In</Link>
        </Button>
      </div>
    </main>
  );
}
