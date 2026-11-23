const axios = require("axios");

const API_KEY = process.env.COGNIFY_API_KEY;

if (!API_KEY) {
  throw new Error("Set the COGNIFY_API_KEY environment variable before running this example.");
}

async function searchBingImages() {
  const response = await axios.get(
    "https://api.cognifyapi.com/bing-images",
    {
      params: {
        query: "microsoft",
        count: 1,
        imageInfo: true,
      },
      headers: {
        "x-cognifyapi-key": API_KEY,
      },
    }
  );

  console.log(response.data);
}

searchBingImages().catch((error) => {
  console.error(
    "Bing Images request failed:",
    error.response?.data || error.message
  );
  process.exitCode = 1;
});
