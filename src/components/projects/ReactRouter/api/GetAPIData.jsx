//Function
export const getMoviesData = async () => {
  try {
    let api_key = import.meta.env.VITE_MOVIES_API_KEY;

    console.log(api_key);

    const resp = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${api_key}&s=titanic&page1`
    );

    const data = await resp.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
