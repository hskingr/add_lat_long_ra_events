import { sanitizeAddress } from "./venueFormatAddress.js";

function formatLatLangResults(documents) {
  // extracts the ID and postcode from the document
  const newDocuments = documents
    .filter((document) => {
      if (document.location !== null) {
        return document;
      }
    })
    //get the necessary info to make the location
    .map((document) => [document._id, sanitizeAddress(document.address)])
    //filter out null postcodes
    .filter((document) => {
      if (document[1] !== null) {
        return document;
      }
    });
  return newDocuments;
}

export default formatLatLangResults;
