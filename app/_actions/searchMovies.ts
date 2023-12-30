"use server";
export default async (key: string): Promise<void | movieType[]> => {
  const apikey: string = process.env.API_KEY!;

  //   await new Promise((resolve) => setTimeout(resolve, 6000));

  try {
    const options: optionsType = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: apikey,
      },
    };

    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${key}&include_adult=false&language=en-US&page=1`,
      options
    );
    const res = await data.json();
    if (res.success === false) {
      throw new Error(res.status_message);
    }
    return res.results;
  } catch (error) {
    throw new Error("fetach failed");
  }
};
