import MovieDetails from "@/app/components/MovieDetails";
import MoviesList from "@/app/components/MoviesList";
import getMovie from "@/app/_actions/getMovie";
import getRelatedMovies from "@/app/_actions/getRelatedMovies";

type propType = {
  params: {
    movieId: string;
  };
};

export default async function MoviePage({ params: { movieId } }: propType) {
  const movie = await getMovie(movieId);
  const relatedMovies = await getRelatedMovies(movieId);

  return (
    <main className="max-w-screen-xl mx-auto mt-24 px-4 md:px-0 ">
      <MovieDetails movie={movie} />
      <br className="my-8" />
      <h3 className="text-3xl font-bold mb-8 ">Related movies</h3>
      <MoviesList movies={relatedMovies.slice(0, 4)} />
    </main>
  );
}
