import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import store from "./model/store.model.js";
import { getPlanets } from "./service/planet.service.js";
import routes from "./utils/routes.js";

import Planets from "./pages/planets.jsx";
import Residents from "./pages/residents.jsx";
import Resident from "./pages/resident.jsx";

function App() {
  const [fetchPlanets, setFetchPlanets] = useState(true);

  useEffect(() => {
    if (fetchPlanets) {
      getPlanets().then(() => { setFetchPlanets(false); });
    }
  }, [fetchPlanets]);

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path={routes.allPlanets.path} element={<Planets store={store} />} />
          <Route path={routes.allResidents.path} element={<Residents store={store} />} />
          <Route path={routes.resident.path} element={<Resident store={store} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
