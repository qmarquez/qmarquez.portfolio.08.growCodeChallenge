import { types } from "mobx-state-tree";
import Planet from "./planet.model.js";

const RootStore = types.model({
  planets: types.array(Planet),
  fetchingPlanets: false,
}).actions(
  self => ({
    setFetchingPlanets(value) {
      self.fetchingPlanets = value;
    },
    addPlanets(planets) {
      const values = planets.map(planet => {
        planet.created = new Date(planet.created);
        planet.edited = new Date(planet.edited);
        return planet;
      });

      self.planets.push(...values);
    },
    clearPlanets() {
      self.planets.clear();
    }
  })
);

const store = RootStore.create();

export default store;