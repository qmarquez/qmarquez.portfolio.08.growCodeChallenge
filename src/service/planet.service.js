import axios from "axios";
import store from "../model/store.model.js";

export default async function getPlanets() {
  const { REACT_APP_SWAPI_URL, REACT_APP_PLANETS_API } = process.env
  let url = REACT_APP_SWAPI_URL.concat(REACT_APP_PLANETS_API);

  const planets = [];
  store.clearPlanets();
  if (!store.fetchingPlanets) {
    store.setFetchingPlanets(true);
    do {
      const { data: { next, results } } = await axios.get(url);
      url = next;
      planets.push(...results);
    } while (url)
    store.setFetchingPlanets(false);
  }

  store.addPlanets(planets);
}