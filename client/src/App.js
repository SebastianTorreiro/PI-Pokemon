import React from "react";
import { BrowserRouter , Routes  ,Route } from "react-router-dom";
import Start from "./components/Start/Start.jsx"
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail.jsx";

function App() {
  return ( 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Start />}/>
          <Route exact path="/pokemons" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route exact path="/pokemons/:id" element={<PokemonDetail />} />
          {/*<Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
