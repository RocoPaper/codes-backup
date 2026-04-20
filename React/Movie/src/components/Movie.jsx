const Movie = ({ movies }) => {
  return (
    <>
      {movies.map((m, index) => (
        <div key={index} className="movie-card">
          <div className="poster-wrap">
            <img src={m.poster} alt={m.title} loading="lazy" />
            <span className="rating-badge">
              <svg className="star-icon" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {m.rating.toFixed(1)}
            </span>
          </div>
          <div className="card-body">
            <p className="movie-title" title={m.title}>
              {m.title}
            </p>
            <p className="movie-year">{m.year}</p>
            <span className="genre-tag">{m.genre}</span>
            <div className="divider"></div>
            <div className="director-row">
              <div className="director-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <span className="director-name">{m.director}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Movie;
