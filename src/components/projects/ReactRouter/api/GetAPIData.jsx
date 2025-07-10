//Function
export const getMoviesData = async () => {
  try {
    const resp = await fetch(
      "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page1"
    );

    const data = await resp.json();

    console.log(data);

    return data;
    
  } catch (error) {
    console.log(error);
  }
};
