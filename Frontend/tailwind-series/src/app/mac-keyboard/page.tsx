export default function Home() {
  return (
    <div className="h-screen bg-neutral-900 pt-10">
      <div className="mx-auto flex w-fit items-center justify-center gap-x-2 rounded-xl bg-neutral-800 p-2 shadow-xl">
        <div className="z-20 flex h-[75px] w-[75px] cursor-pointer items-center justify-center rounded-xl border-[0.8px] border-[#606062] bg-[#0A090D] shadow-lg shadow-[#9C9C9E] select-none hover:z-0 hover:border-[2px] hover:shadow-none">
          <p className="text-white">A</p>
        </div>
        <div className="z-20 flex h-[75px] w-[75px] cursor-pointer items-center justify-center rounded-xl border-[0.8px] border-[#606062] bg-[#0A090D] shadow-lg shadow-[#9C9C9E] select-none hover:z-0 hover:border-[2px] hover:shadow-none">
          <p className="text-white">B</p>
        </div>
        <div className="z-20 flex h-[75px] w-[75px] cursor-pointer items-center justify-center rounded-xl border-[0.8px] border-[#606062] bg-[#0A090D] shadow-lg shadow-[#9C9C9E] select-none hover:z-0 hover:border-[2px] hover:shadow-none">
          <p className="text-white">C</p>
        </div>
        <div className="z-20 flex h-[75px] w-[75px] cursor-pointer items-center justify-center rounded-xl border-[0.8px] border-[#606062] bg-[#0A090D] shadow-lg shadow-[#9C9C9E] select-none hover:z-0 hover:border-[2px] hover:shadow-none">
          <p className="text-white">D</p>
        </div>
      </div>
    </div>
  );
}
