import { types } from "mobx-state-tree";

const Planet = types.model({
  name: types.string,
  diameter: types.string,
  rotation_period: types.string,
  orbital_period: types.string,
  gravity: types.string,
  population: types.string,
  climate: types.string,
  terrain: types.string,
  surface_water: types.string,
  url: types.string,
  residents: types.array(types.string),
  films: types.array(types.string),
  created: types.Date,
  edited: types.Date,
});

export default Planet;