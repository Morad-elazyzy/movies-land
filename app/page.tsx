import getMovies from "@/app/_actions/getMovies";
import MoviesList from "@/app/components/MoviesList";
import Search from "@/app/components/Search";
import LoadMore from "@/app/components/LoadMore";

type propType = {
  searchParams: {
    category: string;
  };
};

export default async function Home({ searchParams: { category } }: propType) {
  const movies = (await getMovies(category)) as movieType[];

  return (
    <main className="max-w-screen-xl min-h-screen mx-auto">
      <Search />
      <MoviesList movies={movies} />
      <LoadMore />
    </main>
  );
}
