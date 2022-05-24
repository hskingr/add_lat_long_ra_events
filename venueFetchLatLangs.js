import fetch from "node-fetch";

const fetchLatLangs = async (postcode) => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${postcode}.json?country=gb&proximity=ip&types=postcode&language=en&access_token=${process.env.MAPBOX_API_KEY}`
    );
    const [lat, long] = JSON.parse(await response.text()).features[0].center;
    return { lat, long };
  } catch (error) {
    console.log(error);
  }
};

export { fetchLatLangs };
