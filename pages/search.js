import React, { useState } from "react";
import Link from "next/link";
function Search() {
  const [id, setId] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-t from-slate-900 to-emerald-700">
      <h1 className="mt-24 bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-6xl font-bold uppercase text-transparent">
        Search Package
      </h1>
      <div className="mt-8 h-full w-80 rounded-lg bg-slate-800 p-4">
        <div className="flex w-full flex-col items-start">
          <label className="mt-2 text-base font-bold text-white md:text-xl">
            Enter your package ID
          </label>
          <input
            className="mt-2 w-full rounded border-2 border-emerald-500 bg-transparent px-4 py-2 text-white"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="rk1tmDYWlJNyZSLHE8ed"
          />
          <Link
            href={`/package/${id}`}
            className="mt-8 rounded bg-gradient-to-t from-emerald-500 to-emerald-900 px-4 py-2 font-bold text-white"
          >
            Search
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Search;
