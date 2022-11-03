import './App.css';
import {Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandigPage.jsx';
import Home from "./Components/Home/Home.jsx"
import DetailsPokemon from './Components/DetailsPokemon/DetailsPokemon.jsx';
import CreatePokemon  from './Components/CreatePokemons/CreatePokemon.jsx';
import  Search  from './Components/Search/Search.jsx';


function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <LandingPage/>
      </Route>
      <Route exact path='/home'>
        <Home/>
      </Route>
      <Route exact path='/pokemons/:id'>
        <DetailsPokemon/>
      </Route>
      <Route exact path="/pokemons">
        <CreatePokemon/>
      </Route>
    </div>
  );
}

export default App;
