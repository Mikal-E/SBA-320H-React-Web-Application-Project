/* ResultsList displays the group of articles returned. It is the section below the top bar that has greeting and avatar.

ResultsList takes props instead of having its own state. States: query, articles, noResults kept in App.jsx for child components use. */

import ArticleCard from "./ArticleCard";

function ResultsList({ articles, noResults }) {

    return (

        <>
        
            {noResults && articles.length === 0 && (

                <p>No articles found. Try a different search term.</p>

            )}

            <section className="results" aria-label="Search results">

                {articles.map((article) => (

                    <ArticleCard key={article.url} article={article} />

                ))}

            </section>
        
        </>

    )

}

export default ResultsList