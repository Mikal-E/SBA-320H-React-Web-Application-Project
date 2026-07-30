/* ArticleCard takes props instead of having its own state. States: query, articles, noResults kept in App.jsx for child components use. */

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