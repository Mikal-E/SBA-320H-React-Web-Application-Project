/* ArticleCard component is built for the individual article.

ArticleCard takes props instead of having its own state. States: query, articles, noResults kept in App.jsx for child components use.

Applied a security best practice for opening links in a new tab that I found while researching: target="_blank" rel="noopener noreferrer" */

function ArticleCard({ article }) {

    return (

        <article className="card">

            {article.image && <img src={article.image} alt={article.title} />}

            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p className="meta">

            {article.source?.name} | {new Date(article.publishedAt).toLocaleDateString()}

            </p>

            <a href={article.url} target="_blank" rel="noopener noreferrer">Read full article</a>

        </article>

    )

}

export default ArticleCard