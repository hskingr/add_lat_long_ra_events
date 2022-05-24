import { getNoLatLangs, updateDocumentWithLocation } from "./venueQueries.js";
import { fetchLatLangs } from "./venueFetchLatLangs.js";

const venueWorker = async () => {
  try {
    const documents = await getNoLatLangs();
    // const [documentId, postcode] = documents[0];
    // console.log(documentId, postcode);
    // const { lat, long } = await fetchLatLangs(postcode);
    // await updateDocumentWithLocation(documentId, lat, long);
    documents.forEach((document) => {
      //   console.log(document);
      //   if (document.postcode !== null) {
      //     doTask(document);
      //   }
    });
  } catch (error) {}
};

async function doTask([documentId, postcode]) {
  const { lat, long } = await fetchLatLangs(postcode);
  console.log(lat, long);
  //   await updateDocumentWithLocation(documentId, lat, long);
}

export { venueWorker };
