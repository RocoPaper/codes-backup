import Movie from "./components/Movie";
import data from "./data";
import movies from "./movies";

function App() {
  return (
    <>
      <div className="cinema-app">
        <div className="cinema-header">
          <h1 className="cinema-title">
            CINE<span>VAULT</span>
          </h1>
          <span className="cinema-subtitle">10 films</span>
        </div>
        <div className="filter-bar" id="filters"></div>
        <div className="movies-grid" id="grid">
          <Movie movies={movies} />
        </div>
      </div>
    </>
  );
}

export default App;
