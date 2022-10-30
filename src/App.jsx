import { useEffect } from "react";
import Planets from "./components/planets.jsx";
import store from "./model/store.model.js";
import getPlanets from "./service/planet.service.js";

function App() {
  useEffect(() => { getPlanets(); }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <Planets store={store} />
      </div>
    </div>
  );
}

export default App;
