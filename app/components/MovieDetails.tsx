import StarRating from "@/app/components/StartRating";
type Props = { movie: movieType };

function MovieDetails({ movie }: Props) {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-6 md:col-span-2">
        <img
          alt="movie poster"
          height="600px"
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        />
      </div>
      <div className="md:col-span-4 col-span-6  md:pl-16 pl-0 ">
        <h1 className="text-3xl font-bold text-gray-400 my-4 ">
          {movie.title}
        </h1>
        <div className="mb-4">
          <span className="text-xl font-bold text-gray-600  ">
            Directed By :{" "}
          </span>
          <span className="ml-2 text-xl text-gray-700">Alfred hio </span>
        </div>
        <div className="text-gray-300 text-lg ">
          <span className="mr-4"> {movie.release_date} </span>
          <span>2 hours 23 min</span>
        </div>
        <div className="flex my-2 items-center">
          <StarRating rating={2} totalStars={5} />
          <span className="font-bold text-lg ml-2">
            {movie.vote_average.toFixed(1)}{" "}
          </span>
        </div>
        <div className="text-lg">
          <p>{movie.overview}</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            quis laborum dolorem sequi accusantium blanditiis officiis! Deserunt
            molestias quam neque!
          </p>
        </div>
        <div>
          <button className="mt-4 bg-blue-800 text-white text-xl font-medium rounded px-8 py-4">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
