import Link from "next/link";
import QuickSearch from "./QuickSearch";

const Navbar = () => {
  return (
    <nav className="bg-white px-4 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Movies land
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <QuickSearch />
        </div>

        <div
          className="flex items-center justify-between  w-full md:w-auto md:order-1"
          id="navbar-search"
        >
          <ul className="flex ">
            <li>
              <a
                className="block py-2 px-3 text-white"
                aria-current="page"
                href="/?category=popular"
              >
                Popular
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-3 text-white"
                aria-current="page"
                href="/?category=top_rated"
              >
                Top Rate
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-3 text-white"
                aria-current="page"
                href="/?category=upcoming"
              >
                Upcoming
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
