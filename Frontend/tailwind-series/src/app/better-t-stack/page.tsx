import { Navbar } from "./_components/navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <Navbar />
      <div className="mt-24">
        <Hero />
      </div>
    </div>
  );
}

export const Hero = () => {
  const roll = `
  ██████╗  ██████╗ ██╗     ██╗
  ██╔══██╗██╔═══██╗██║     ██║
  ██████╔╝██║   ██║██║     ██║
  ██╔══██╗██║   ██║██║     ██║
  ██║  ██║╚██████╔╝███████╗███████╗
  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝
  `;

  const your = `
  ██╗   ██╗ ██████╗ ██╗   ██╗██████╗
  ╚██╗ ██╔╝██╔═══██╗██║   ██║██╔══██╗
   ╚████╔╝ ██║   ██║██║   ██║██████╔╝
    ╚██╔╝  ██║   ██║██║   ██║██╔══██╗
     ██║   ╚██████╔╝╚██████╔╝██║  ██║
     ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═╝
`;

  const own = `
   ██████╗ ██╗    ██╗███╗   ██╗
  ██╔═══██╗██║    ██║████╗  ██║
  ██║   ██║██║ █╗ ██║██╔██╗ ██║
  ██║   ██║██║███╗██║██║╚██╗██║
  ╚██████╔╝╚███╔███╔╝██║ ╚████║
   ╚═════╝  ╚══╝╚══╝ ╚═╝  ╚═══╝
  `;

  const stack = `
   ███████╗████████╗ █████╗  ██████╗██╗  ██╗
   ██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝
   ███████╗   ██║   ███████║██║     █████╔╝
   ╚════██║   ██║   ██╔══██║██║     ██╔═██╗
   ███████║   ██║   ██║  ██║╚██████╗██║  ██╗
   ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
`;

  return (
    <div className="selection:bg-primary selection:text-neutral-800">
      <div className="flex flex-wrap justify-center lg:gap-y-1">
        <pre className="ascii-art text-primary text-xs sm:text-sm">{roll}</pre>
        <pre className="ascii-art text-primary text-xs sm:text-sm">{your}</pre>
        <pre className="ascii-art text-primary text-xs sm:text-sm">{own}</pre>
        <pre className="ascii-art text-primary text-xs sm:text-sm">{stack}</pre>
      </div>

      <p className="mx-3 mt-8 text-center text-lg">
        Modern CLI for scaffolding end-to-end type-safe TypeScript projects
      </p>

      <p className="mt-2 text-center text-xl">
        <span className="text-primary">█</span> [vlatest]
      </p>
    </div>
  );
};

//   const name = `
// ██████╗  █████╗ ██████╗ ███████╗██╗  ██╗ █████╗ ███╗   ██╗    ██████╗
// ██╔══██╗██╔══██╗██╔══██╗██╔════╝██║  ██║██╔══██╗████╗  ██║    ██╔══██╗
// ██║  ██║███████║██████╔╝███████╗███████║███████║██╔██╗ ██║    ██████╔╝
// ██║  ██║██╔══██║██╔══██╗╚════██║██╔══██║██╔══██║██║╚██╗██║    ██╔═══╝
// ██████╔╝██║  ██║██║  ██║███████║██║  ██║██║  ██║██║ ╚████║    ██║
// ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝
//   `;
