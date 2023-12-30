"use server";
export default async (
  category: string = "popular",
  pageNumber?: string | number
): Promise<void | movieType[]> => {
  let page = pageNumber || 1;
  const apikey: string = process.env.API_KEY!;
  const baseUrl: string = "https://api.themoviedb.org/3/movie/";
  let endPoint: string = "popular?language=en-US";

  const options: optionsType = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: apikey,
    },
  };

  //set the end point base on category
  if (category === "top_rated") {
    endPoint = "top_rated?language=en-US";
  } else if (category === "upcoming") {
    endPoint = "upcoming?language=en-US";
  }
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  try {
    const data = await fetch(
      `${baseUrl}${endPoint}&page=${page}?api_key=${apikey}`,
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
