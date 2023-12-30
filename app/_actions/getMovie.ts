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
    const data = await fetch(`${baseUrl}${id}?api_key=${apikey}`, options);
    const res = await data.json();
    if (res.success === false) {
      throw new Error(res.status_message);
    }
    return res;
  } catch (error) {
    return error;
  }
};
