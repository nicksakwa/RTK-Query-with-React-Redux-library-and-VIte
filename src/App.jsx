import './App.css'
import { useGetPokemonByNameQuery } from './store.js';

function App(){
  const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu');

  return(
    <div className="App">
      <h1>RTK Query Example</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Oh no theres been an error!</p>}
      {data && (
        <div>
          <h2>{data.name}</h2>  
          <img src={data.sprites.front_default} alt={data.name} />
        </div>
      )}
    </div>
  );
  
}
export default App;
