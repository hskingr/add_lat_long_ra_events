import Venue from "./venueModel.js";

const getNoLatLangs = async () => {
  try {
    //looks for documnents that have not had the coordinates field added to it yet.
    const documents = await Venue.find({
      location: { $exists: false },
      address: { $ne: null },
    });
    return documents;
  } catch (error) {
    console.log(error);
  }
};

const updateDocumentWithLocation = async (documentId, lat, long) => {
  const newFields = {
    location: {
      type: "Point",
      coordinates: [lat, long],
    },
  };
  console.log(newFields);
  await Venue.findByIdAndUpdate(documentId, newFields);
};

export { getNoLatLangs, updateDocumentWithLocation };
