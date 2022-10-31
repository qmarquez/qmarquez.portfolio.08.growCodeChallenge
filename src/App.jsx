import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Planets from "./pages/planets.jsx";
import Residents from "./pages/residents.jsx";
import store from "./model/store.model.js";
import { getPlanets } from "./service/planet.service.js";
import routes from "./utils/routes.js";

function App() {
  const [fetchPlanets, setFetchPlanets] = useState(true);

  useEffect(() => {
    if (fetchPlanets) {
      getPlanets().then(() => { setFetchPlanets(false); });
    }
  }, [fetchPlanets]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <Routes>
          <Route index element={<Planets store={store} />} />
          <Route path={routes.allResidents.path} element={<Residents store={store} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
