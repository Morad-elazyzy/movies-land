"use server";

type Props = {};

export default async function getRandomMovie() {
  const apikey: string = process.env.API_KEY!;
  const baseUrl: string = "https://api.themoviedb.org/3/discover/movie";
  let endPoint: string = "popular?language=en-US";
  //   await new Promise((resolve) => setTimeout(resolve, 6000));

  const options: optionsType = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: apikey,
    },
  };

  try {
    const res = await fetch(
      `${baseUrl}?sort_by=vote_average.desc&vote_average.gte=7&vote_average.lte=8?&popularity.gte=12000&popularity.lte=20000`,
      options
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
