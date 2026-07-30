/* SearchBar takes props instead of having its own state. States: query, articles, noResults kept in App.jsx for child components use. */

function SearchBar({ query, setQuery, onSearch }) {

    return (

        <section className="search-section">

            <label htmlFor="query">Search industry or brand</label>

            <input
            
            id="query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Example: Crazy Kicks, EffervesScents, Apparel, Beauty"
            
            />

            <button onClick={onSearch}>Search</button>

        </section>

    )

}

export default SearchBar