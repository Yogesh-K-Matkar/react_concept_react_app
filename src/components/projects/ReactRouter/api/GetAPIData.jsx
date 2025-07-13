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

export const getMoviesDataByParams = async ({ params }) => {
  console.log(params);

  console.log(params.movieID);

  let api_key = import.meta.env.VITE_MOVIES_API_KEY;
  let movieID = params.movieID;

  try {
    let api_key = import.meta.env.VITE_MOVIES_API_KEY;

    console.log(api_key);

    const resp = await fetch(
      `https://www.omdbapi.com/?i=${movieID}&apikey=${api_key}`
    );

    const data = await resp.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
