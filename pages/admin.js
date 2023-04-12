import EditModel from "@/components/EditModel";
import { db } from "@/utils/Firebase";
import { getDocs, collection } from "@firebase/firestore";
import React, { useEffect, useRef, useState } from "react";

function Admin({ data }) {
  const [dataArr, setDataArr] = useState([...data]);
  const [open, setOpen] = useState(false);
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "packages"));
    querySnapshot.forEach((doc) => {
      setDataArr([doc.data()]);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-t from-slate-900 to-emerald-700">
      <h1 className="mt-24 bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-6xl font-bold uppercase text-transparent">
        Admin
      </h1>
      <div className="mb-24 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dataArr.map((item) => {
          return (
            <div
              key={item.id}
              className="mt-8 w-full rounded-lg bg-slate-800 p-4"
            >
              <EditModel
                open={open}
                setOpen={setOpen}
                id={item.id}
                getData={getData}
              />
              <div className="flex w-full flex-col items-start">
                <label className="text-xl font-bold text-white">
                  ID:{" "}
                  <span className="font-normal text-emerald-200">
                    {item.id}
                  </span>
                </label>
              </div>
              <div className="mt-8 flex w-full flex-col items-start">
                <label className="text-xl font-bold text-white">
                  Email:{" "}
                  <span className="font-normal text-emerald-200">
                    {item.email}
                  </span>
                </label>
              </div>
              <div className="mt-8 flex w-full flex-col items-start">
                <label className="text-xl font-bold text-white">
                  Location:{" "}
                  <span className="font-normal text-emerald-200">
                    {item.location}
                  </span>
                </label>
              </div>
              <div className="mt-8 flex w-full flex-col items-start">
                <label className="text-xl font-bold text-white">
                  Status:{" "}
                  <span className="font-normal text-emerald-200">
                    {item.status}
                  </span>
                </label>
              </div>
              <div className="mt-8 flex w-full flex-col items-start">
                <label className="text-xl font-bold text-white">
                  Description:{" "}
                  <span className="font-normal text-emerald-200">
                    {item.description}
                  </span>
                </label>
              </div>
              <div className="mt-8 flex w-full flex-col items-start">
                <button
                  onClick={() => setOpen(true)}
                  className="rounded bg-gradient-to-t from-emerald-500 to-emerald-900 px-4 py-2 font-bold text-white"
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Admin;

export async function getServerSideProps(context) {
  //get all packages
  const querySnapshot = await getDocs(collection(db, "packages"));
  const data = querySnapshot.docs.map((doc) => doc.data());
  return {
    props: {
      data,
    },
  };
}
