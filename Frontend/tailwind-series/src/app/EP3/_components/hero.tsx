export const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-40 max-w-3xl bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl font-bold tracking-tight text-transparent">
        Unleash the power of intuitive finance
      </h1>
      <p className="selection:bg-primary/90 mt-10 max-w-3xl text-center text-xl text-neutral-300">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the <span className="text-primary">background</span>, can
        now manage their business like a pro. Simple. Intuitive. And never
        boring.
      </p>

      <div className="mt-8 flex justify-center">
        <button className="relative cursor-pointer overflow-hidden rounded-xl border border-neutral-700 px-4 py-2 text-white">
          <div className="via-primary absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
          Join Waitlist
        </button>
      </div>
    </div>
  );
};
