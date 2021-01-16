export const getBreakingNews = async () => {
  const response = await fetch(
    "https://breaking-news2.p.rapidapi.com/wp-json/wp/v2/posts",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9368e7631emshe32a29ba22159a5p1b038bjsnaa6c3f5cc417",
        "x-rapidapi-host": "breaking-news2.p.rapidapi.com",
      },
    }
  );
  if (response.status >= 200 && response.status <= 299) {
    const jsonResponse = await response.json();
    return jsonResponse
  } else {
    console.log(`Error! Code: ${response}`);
    console.log(
      "There seems to be a problem with the server. Please refresh the page."
    );
    return response.status;
  }
};
