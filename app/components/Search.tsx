"use client";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
type Props = {};

function Search({}: Props) {
  const [search, setSearch] = useState<String>("");

  return (
    <div className="flex gap-4 items-center my-8 ">
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
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        <BsSearch />
      </button>
    </div>
  );
}

export default Search;
