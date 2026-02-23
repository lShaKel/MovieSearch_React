const App = () => {
  return (
    <div>
      <section
        className="search"
        data-js-search-root
      >
        <form
          className="search__form"
          data-js-search-form
        >
          <label
            htmlFor="movieName"
            className="search__form-label"
          >Movie name:
          </label>
          <input
            className="search__form-input"
            id="movieName"
            data-js-search-input
          />
          <button
            className="search__form-button"
            type="submit"
            data-js-search-button
          >
            Search Query
          </button>
        </form>
        <button
          className="search__form-button discover-button"
          type="button"
          data-js-search-button-discover
        >
          Search discover
        </button>
        <div className="filters">
          <button
            className="search__form-button load-button"
            type="button"
            data-js-filter-load-more-button
          >
            Load more
          </button>
          <button
            className="search__form-button switch-button"
            type="button"
            data-js-switch-button
          >
            Popular / Top rated
          </button>
        </div>
        <div
          className="search__container"
          data-js-search-container
        >
          <div className="search__results">
            <p>Movie</p>
            <img src="/public/Movie_poster_for__Scary_Movie_.jpg" />
          </div>
          <div className="search__results">
            <p>Movie</p>
            <img src="/public/Movie_poster_for__Scary_Movie_.jpg" />
          </div>
        </div>
        <button
          className="theme-changer"
          type="button"
          data-js-search-change-theme
        >
          Theme
        </button>
        <div
          className="loader visually-hidden"
          data-js-loader
        >
          <div className="text">
            <span style={{ "--i": 1 }}>L</span>
            <span style={{ "--i": 2 }}>o</span>
            <span style={{ "--i": 3 }}>a</span>
            <span style={{ "--i": 4 }}>d</span>
            <span style={{ "--i": 5 }}>i</span>
            <span style={{ "--i": 6 }}>n</span>
            <span style={{ "--i": 7 }}>g</span>
            <span style={{ "--i": 8 }}>.</span>
            <span style={{ "--i": 9 }}>.</span>
            <span style={{ "--i": 10 }}>.</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
