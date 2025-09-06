// Example using JioSaavn unofficial API
import axios from 'axios';
export async function fetchArtists(query, pages) {
  try {
    const res = await axios.get(
      `https://saavn.dev/api/search/artists?query=${query}&page=${pages}`
    );
    const data = await res?.data?.data;
    return data;
  } catch (err) {
    console.error("Error fetching songs:", err);
    return [];
  }
}
