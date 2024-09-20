import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID gOmSDJXRPfek_DNWP9PT4ifkAKHbmePGPMXqSFKb4dY",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
