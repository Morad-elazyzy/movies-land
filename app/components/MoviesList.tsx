import React from "react";
import MovieItem from "./MovieItem";
type Props = {
  movies: movieType[];
};

export default function MoviesList({ movies }: Props) {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-8">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
