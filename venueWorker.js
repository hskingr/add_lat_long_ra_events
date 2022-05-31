import { getNoLatLangs, updateDocumentWithLocation } from "./venueQueries.js";
import { fetchLatLangs } from "./venueFetchLatLangs.js";
import formatLatLangResults from "./formatLatLongResults.js";

const venueWorker = async () => {
  try {
    const documents = await formatLatLangResults(await getNoLatLangs());
    const promiseArr = [];
    documents.forEach((document) => {
      const postcode = document[1];
      if (postcode !== null) {
        promiseArr.push(doTask(document));
      }
    });
    return promiseArr;
  } catch (error) {
    console.log(error);
  }
};

async function doTask([documentId, postcode]) {
  const {
    jsonResponse: { features },
  } = await fetchLatLangs(postcode);
  if (features.length !== 0) {
    const [lat, long] = features[0].center;
    console.log(lat, long);
    await updateDocumentWithLocation(documentId, lat, long);
  }
}

export { venueWorker };
