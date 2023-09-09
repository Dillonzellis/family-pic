import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full bg-slate-950 text-white flex flex-col justify-center items-center">
      <div className="space-y-4">
        <div className="italic text-5xl font-bold">Family Pic</div>
        <div className="space-x-4">
          <SignedIn>
            <Button asChild className="bg-red-900 hover:bg-red-500/80">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <Button asChild className="bg-red-900 hover:bg-red-500/80">
              <Link href="/sign-in">Log In</Link>
            </Button>
            <Button asChild className="bg-red-900 hover:bg-red-500/80">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </main>
  );
}
