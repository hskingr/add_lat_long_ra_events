import Venue from "./venueModel.js";
import { sanitizeAddress } from "./venueFormatAddress.js";

const getNoLatLangs = async () => {
  try {
    //looks for documnents that have not had the coordinates field added to it yet.
    const documents = await Venue.find({
      location: { $exists: false },
      address: { $ne: null },
    });
    // extracts the ID and postcode from the document
    const newDocuments = documents.map((document) => [
      document._id,
      sanitizeAddress(document.address),
    ]);
    return newDocuments;
  } catch (error) {
    console.log(error);
  }
};

const updateDocumentWithLocation = async (documentId, lat, long) => {
  const newFields = {
    location: {
      coordinates: [lat, long],
    },
  };
  await Venue.findByIdAndUpdate(documentId, newFields);
};

export { getNoLatLangs, updateDocumentWithLocation };
