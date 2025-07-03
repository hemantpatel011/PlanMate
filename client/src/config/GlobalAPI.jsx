import axios from "axios"

const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

const config = {
    headers:{
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': import.meta.env.VITE_PLACE_API_KEY,
        'X-Goog-FieldMask': [
     'places.photos',
     'places.name',
     'places.id'
 ]

        
    }
}

export const GetPlaceDetails = async (data) => {
  try {
    const response = await axios.post(BASE_URL, data, config);
    return response;
  } catch (error) {
    console.error("Failed to fetch place details:", error.response?.data || error.message);
  }
};

export const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?key='+import.meta.env.VITE_PLACE_API_KEY+'&maxHeightPx=1200&maxWidthPx=1200';
