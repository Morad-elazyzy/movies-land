import Link from "next/link";

type Props = {
  movie: movieType;
};

function MovieItem({ movie }: Props) {
  return (
    <div className=" ">
      <div className="rounded-lg bg-gray-700 shadow-lg text-white">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt="movie poster"
          className="rounded-t-lg "
          style={{ width: "100%", height: "400px" }}
        />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-semibold truncate ">
            {movie.title}{" "}
          </h2>
          <p className="mb-2 text-sm "> {movie.release_date} </p>
          <p className="mb-4 text-sm ">Rating: {movie.vote_average} </p>
          <Link
            href={`/${movie.id}`}
            className="block rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600"
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
