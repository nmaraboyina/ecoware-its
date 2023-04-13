import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/utils/Firebase";

const Statuses = [
  "Processing",
  "Shipping",
  "In Storage",
  "In Production",
  "Processed",
  "Delayed",
  "Reshipping",
  "Reprocessing",
  "Reproduction",
];

export default function EditModel({ open, setOpen, id, getData }) {
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "packages", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setStatus(docSnap.data().status);
        setLocation(docSnap.data().location);
      } else {
        console.log("No such document!");
      }
    };
    getData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "packages", id);
    await updateDoc(docRef, {
      status,
      location,
    });
    getData();
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-emerald-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              className="w-full"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-slate-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="text-emerald-300 transition duration-150 ease-in-out hover:text-emerald-100"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <Dialog.Title className="text-lg font-medium leading-6 text-white">
                  Edit Package
                </Dialog.Title>

                <form onSubmit={handleSubmit} className="w-full">
                  <div className="mt-4 w-full">
                    <label className="block text-sm font-medium text-white">
                      Status
                    </label>
                    <select
                      className="mt-1 block w-full rounded border-2 border-emerald-500 bg-transparent px-4 py-2 text-white"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      {Statuses.map((status) => (
                        <option key={status} value={status} className="text-emerald-500 bg-slate-800">
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-white">
                      Location
                    </label>
                    <input
                      className="mt-1 block w-full rounded border-2 border-emerald-500 bg-transparent px-4 py-2 text-white"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </form>

                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full rounded bg-gradient-to-t from-emerald-500 to-emerald-900 px-4 py-2 font-bold text-white"
                  >
                    Update
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
