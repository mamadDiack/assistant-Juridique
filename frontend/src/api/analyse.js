import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export async function analyserSituation(situation) {
  const { data } = await axios.post(apiUrl + "/api/analyse", { situation });

  return data.analyse;
}
