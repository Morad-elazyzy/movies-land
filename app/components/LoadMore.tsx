"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSearchParams } from "next/navigation";
import Loading from "./Loading";
import MoviesList from "./MoviesList";
import getMovies from "@/app/_actions/getMovies";

type Props = {};
let page = 2;
export default function LoadMore({}: Props) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const { ref, inView } = useInView();
  const [movies, setMovies] = useState<movieType[]>([]);

  useEffect(() => {
    if (inView) {
      getMovies(category!, page).then((res) => setMovies([...movies, ...res!]));
      page++;
    }
  }, [inView, movies]);

  return (
    <>
      {movies && movies.length ? <MoviesList movies={movies} /> : null}
      <div ref={ref}>
        <Loading />
      </div>
    </>
  );
}
