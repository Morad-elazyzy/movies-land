import searchMovies from "../_actions/searchMovies";

import Search from "@/app/components/Search";
import MoviesList from "@/app/components/MoviesList";

type propType = {
  searchParams: {
    key: string;
  };
};

export default async function SearchPage({ searchParams: { key } }: propType) {
  const movies = (await searchMovies(key)) as movieType[];
  if (movies && movies.length > 0) {
    return (
      <>
        <Search />
        <MoviesList movies={movies} />
      </>
    );
  } else {
    return <div>No result found</div>;
  }
}

export async function generateMetadata({ searchParams: { key } }: propType) {
  return {
    title: `${key}`,
    description: `Results for ${key}`,
  };
}
