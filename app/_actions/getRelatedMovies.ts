"use server";
export default async (id: string) => {
  const apikey = process.env.API_KEY!;
  const baseUrl = "https://api.themoviedb.org/3/movie/";
  const options: optionsType = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: apikey,
    },
  };
  try {
    const data = await fetch(
      `${baseUrl}${id}/recommendations?language=en-US&limit=6&page=1`,
      options
    );
    const res = await data.json();
    if (res.success === false) {
      throw new Error(res.status_message);
    }
    return res.results;
  } catch (error) {
    throw new Error("fetch failed");
  }
};
