"use client";
import { useState, useEffect } from "react";
import searchMovies from "@/app/_actions/searchMovies";
type Props = {};

export default function QuickSearch({}: Props) {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<movieType[]>([]);

  useEffect(() => {
    if (search.length > 0) {
      console.log(data);
      searchMovies(search).then((res) => setData(res!.slice(0, 6)));
    }
  }, [search]);

  const onClick = (id: string | number) => {
    window.location.href = `/${id}`;
    setSearch("");
  };

  let renderResults;
  if (data.length > 0 && search.length > 0) {
    renderResults = (
      <div className=" px-2 py-4">
        {data.map((movie) => (
          <div
            onClick={() => onClick(movie.id)}
            className="flex overflow-hidden mb-2 bg-gray-900 hover:bg-gray-800 cursor-pointer"
          >
            <div
              style={{
                width: "60px",
                height: "80px",
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
              />
            </div>
            <div className="ml-2 text-sm">
              <h5 className="font-light  ">{movie.title.substring(0, 15)} </h5>
              <p>{movie.release_date.substring(0, 4)} </p>
            </div>
          </div>
        ))}
      </div>
    );
  } else if (search.length > 0 && data.length == 0) {
    renderResults = "no result found";
  }
  return (
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
        <span className="sr-only">Search icon</span>
      </div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        id="search-navbar"
        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
      />
      <div className="bg-gray-950 text-white absolute left-0 right-0 bottom">
        {renderResults}
      </div>
    </div>
  );
}
