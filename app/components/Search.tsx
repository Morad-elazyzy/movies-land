"use client";
import React, { useState } from "react";
import Link from "next/link";
type Props = {};

function Search({}: Props) {
  const [search, setSearch] = useState<String>("");

  return (
    <div className="flex flex-col gap-4 sm:flex-row  items-start sm:items-center my-8 ">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        id="search-navbar"
        className="block mr-2 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
      />
      <button
        onClick={() => {
          window.location.href = `/search?key=${search}`;
        }}
        type="button"
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
