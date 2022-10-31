import axios from "axios";

export async function getResidentByUrl(url) {
  const { data } = await axios.get(url);
  return data;
}

export async function getResidentById(id) {
  const { REACT_APP_SWAPI_URL, REACT_APP_PEOPLE_API } = process.env;
  let url = REACT_APP_SWAPI_URL.concat(REACT_APP_PEOPLE_API, id);
  
  const { data } = await axios.get(url);
  return data;
}