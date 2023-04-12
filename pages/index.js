import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-t from-slate-900 to-emerald-700">
      <div className="mt-24 flex flex-col items-center p-2">
        <Image
          src="/truck.svg"
          width={300}
          height={300}
          className="h-[80%] w-[80%]"
          alt="Kijani Ecoware ITS"
        />
        <h1 className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-4xl font-black uppercase text-transparent md:text-6xl">
          Kijani Ecoware ITS
        </h1>
      </div>
    </main>
  );
}
