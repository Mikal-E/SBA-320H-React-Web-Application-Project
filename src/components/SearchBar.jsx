/* SearchBar takes props instead of having its own state. States: query, articles, noResults kept in App.jsx for child components use. */

function SearchBar({ query, setQuery, onSearch }) {

    return (

        <section className="search-section">

            <label htmlFor="query">Search industry or brand</label>

            <div className="search-bar">

                <input
            
                    id="query"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Example: Crazy Kicks, EffervesScents, Apparel, Beauty"
                    
                />

{/* className="search-action" was used because of issues with using .search-button button or search-wrapper-button button in CSS file. */}

                <div className="search-action">

                    <button onClick={onSearch}>

                        <i className="fa-solid fa-magnifying-glass"></i> Search

                    </button>

                </div>

            </div>

        </section>

    )

}

export default SearchBar