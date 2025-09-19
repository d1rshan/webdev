import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const links = [
    { title: "Docs", href: "#" },
    { title: "Builder", href: "#" },
    { title: "Analytics", href: "#" },
    { title: "Showcase", href: "#" },
  ];
  return (
    <nav className="border-secondary/30 bg-background/80 fixed inset-x-0 top-0 left-0 z-10 flex items-center justify-between border-b p-3 shadow-md backdrop-blur-md">
      <div className="flex items-center gap-x-2">
        <Image
          src={
            "https://better-t-stack.dev/_next/static/media/logo.f4170e7f.svg"
          }
          alt="logo"
          width={30}
          height={30}
        />
        <span className="text-heading font-mono tracking-tighter">
          Better T Stack
        </span>
        <div className="ml-6 hidden gap-x-6 text-sm text-neutral-400 md:flex">
          {links.map((link, idx) => (
            <Link key={idx} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* TODO: Finish the laptop navbar
      <div>
        <div className="flex items-center gap-x-2 bg-red-700 px-2">
          <SearchIcon />
          <span>Search</span>
        </div>
      </div> */}
      <div className="flex items-center gap-x-4 lg:hidden">
        <SearchIcon />
        <DropdownIcon />
      </div>
    </nav>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="text-heading"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </svg>
  );
};

export const DropdownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="text-heading lucide !size-5.5 transition-transform duration-300 group-data-[state=open]:rotate-180"
    >
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  );
};
