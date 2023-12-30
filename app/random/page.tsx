import getRandomMovie from "../_actions/getRandomMovie";
import Test from "@/app/search/Test";

type Props = {};

export default async function randomMoviePage({}: Props) {
  // const movies = await getRandomMovie();
  // console.log(movies);
  return (
    <div>
      <Test />{" "}
    </div>
  );
}
