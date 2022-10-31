import axios from "axios";

export async function getResident(url) {
  const { data } = await axios.get(url);
  return data;
}