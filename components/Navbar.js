import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-emerald-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-white">
                    Kijani Ecoware
                  </h1>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    <Link
                      href="/"
                      className="rounded-md bg-emerald-800 px-3 py-2 text-sm font-medium text-white"
                    >
                      Go Home
                    </Link>
                    <Link
                      href="/add"
                      className="rounded-md bg-emerald-800 px-3 py-2 text-sm font-medium text-white"
                    >
                      Add a package
                    </Link>
                    <Link
                      href="/search"
                      className="rounded-md bg-emerald-800 px-3 py-2 text-sm font-medium text-white"
                    >
                      Search for a package
                    </Link>
                    <Link
                      href="/admin"
                      className="rounded-md bg-emerald-800 px-3 py-2 text-sm font-medium text-white"
                    >
                      Admin
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-emerald-400 hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Disclosure.Button
                className="flex w-full items-start rounded-md bg-emerald-800 px-3 py-2 text-base font-medium text-white"
                as={Link}
                href="/"
              >
                Go Home
              </Disclosure.Button>
              <Disclosure.Button
                className="block rounded-md bg-emerald-800 px-3 py-2 text-base font-medium text-white"
                as={Link}
                href="/add"
              >
                Add a package
              </Disclosure.Button>
              <Disclosure.Button
                className="block rounded-md bg-emerald-800 px-3 py-2 text-base font-medium text-white"
                as={Link}
                href="/search"
              >
                Search for a package
              </Disclosure.Button>
              <Disclosure.Button
                className="block rounded-md bg-emerald-800 px-3 py-2 text-base font-medium text-white"
                as={Link}
                href="/admin"
              >
                Admin
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
