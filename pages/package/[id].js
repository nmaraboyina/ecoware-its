import React from "react";
import { useRouter } from "next/router";
import { db } from "@/utils/Firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";

function Package({ data }) {
  const router = useRouter();
  const { id } = router.query;
  const { email, description, location, status } = data[0];

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-t from-slate-900 to-emerald-700">
      <h1 className="mt-24 bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-6xl font-bold uppercase text-transparent">
        Package
      </h1>
      <div className="mt-8 flex flex-col items-start">
        <div className="flex w-full flex-col items-start">
          <label className="text-xl font-bold text-white">
            ID: <span className="font-normal text-emerald-200">{id}</span>
          </label>
        </div>
        <div className="mt-8 flex w-full flex-col items-start">
          <label className="text-xl font-bold text-white">
            Email: <span className="font-normal text-emerald-200">{email}</span>
          </label>
        </div>
        <div className="mt-8 flex w-full flex-col items-start">
          <label className="text-xl font-bold text-white">
            Location:{" "}
            <span className="font-normal text-emerald-200">{location}</span>
          </label>
        </div>
        <div className="mt-8 flex w-full flex-col items-start">
          <label className="text-xl font-bold text-white">
            Status:{" "}
            <span className="font-normal text-emerald-200">{status}</span>
          </label>
        </div>
        <div className="mt-8 flex w-full flex-col items-start">
          <label className="text-xl font-bold text-white">
            Description:{" "}
            <span className="font-normal text-emerald-200">{description}</span>
          </label>
        </div>
      </div>
    </main>
  );
}

export default Package;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const q = query(collection(db, "packages"), where("id", "==", id));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => doc.data());
  return {
    props: {
      data,
    },
  };
}
