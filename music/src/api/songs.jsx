// Example using JioSaavn unofficial API
import axios from 'axios';
export async function fetchSongs(query, pages) {
  try {
    const res = await axios.get(
      `https://saavn.dev/api/search/songs?query=${query}&page=${pages}`
    );
    const data = await res?.data?.data;
    return data;
  } catch (err) {
    console.error("Error fetching songs:", err);
    return [];
  }
}
