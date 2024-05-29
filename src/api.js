import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID DW8FQj2xGdXRZ94RW7mJik66R2ZKebLZ2MFNoAb_WVg",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
