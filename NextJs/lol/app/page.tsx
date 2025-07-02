import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col h-full justify-center items-center gap-4">
      <Button asChild>
        <Link href={"/zustand"}>Zustand tut</Link>
      </Button>
      <Button asChild>
        <Link href={"/react-hook-form"}>React hook form tut</Link>
      </Button>
    </div>
  );
}
