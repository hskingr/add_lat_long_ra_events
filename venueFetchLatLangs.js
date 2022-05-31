import fetch from "node-fetch";

const fetchLatLangs = async (postcode) => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${postcode}.json?country=gb&proximity=ip&types=postcode&language=en&access_token=${process.env.MAPBOX_API_KEY}`
    );
    // console.log(await response.status);
    const jsonResponse = await response.json();
    if (jsonResponse === undefined) {
      return null;
    }
    return { jsonResponse, status: response.status };
  } catch (error) {
    console.log(postcode, error);
    return null;
  }
};

export { fetchLatLangs };
