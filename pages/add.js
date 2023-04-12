import { useState } from "react";
import { db } from "@/utils/Firebase";
import { addDoc, doc, collection, updateDoc } from "@firebase/firestore";
import Link from "next/link";

export default function Add() {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");

  const location = "Mumbai, India";
  const status = "Processing";

  const handleSubmit = async () => {
    const docRef = await addDoc(collection(db, "packages"), {
      email,
      description,
      location,
      status,
    });
    setId(docRef.id);
    updateDoc(docRef, {
      id: docRef.id,
      description,
    });
    navigator.clipboard.writeText(docRef.id);
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-t from-slate-900 to-emerald-700">
      <h1 className="mt-24 bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-6xl font-bold uppercase text-transparent">
        Add
      </h1>
      <div className="mt-8 h-full w-80 rounded-lg bg-slate-800 p-4">
        <div className="flex w-full flex-col items-start">
          <label className="mt-2 text-base font-bold text-white md:text-xl">
            Enter your email address
          </label>
          <input
            className="mt-2 w-full rounded border-2 border-emerald-500 bg-transparent px-4 py-2 text-white"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john.doe@ecoware.com"
          />
          <label className="mt-2 text-base font-bold text-white md:text-xl">
            Enter your package description
          </label>
          <textarea
            className="mt-2 w-full rounded border-2 border-emerald-500 bg-transparent px-4 py-2 text-white"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="10 boxes of eco-friendly plates"
          />
        </div>
        <button
          className="mt-8 rounded bg-gradient-to-t from-emerald-500 to-emerald-900 px-4 py-2 font-bold text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <p className="mt-8 text-xl font-bold text-white">
          {id ? `Your package ID is ${id}` : ""}
        </p>
        <p className="mt-8 text-xl font-bold text-white">
          {id ? `Copied to clipboard` : ""}
        </p>
      </div>
    </main>
  );
}
