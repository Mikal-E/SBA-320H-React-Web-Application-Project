import { useState } from "react"
import SearchBar from "./components/SearchBar"
import ResultsList from "./components/ResultsList"
import pulseLogo from "./assets/pulseLogo.png"

function App() {

const [query, setQuery] = useState("")
const [articles, setArticles] = useState([])
const [noResults, setNoResults] = useState(false)

const fetchNews = async () => {

  const apiKey = import.meta.env.VITE_GNEWS_API_KEY
  const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&max=10&apikey=${apiKey}`

    try {

      const response = await fetch(url)
      const data = await response.json()

      setArticles(data.articles || [])
      setNoResults(true)
      
    } catch (error) {

      console.error("Error fetching news:", error)
      
    }

}

  return (

    <div className="app">

      <header>

        <img src={pulseLogo} alt="Pulse logo" className="logo"/>
        <h1>Pulse<sup>by Brief.io</sup></h1>

      </header>

      <main>

        <SearchBar query={query} setQuery={setQuery} onSearch={fetchNews} />
        <ResultsList articles={articles} noResults={noResults} />

      </main>

    </div>

  )

}

/* Code prior to refactoring - tested to make sure API was working and data was rendering. After everything observed and functioned as expected, created ArticleCard.jsx, ResultsList.jsx, and SearchBar.jsx to refactor this code.

Applied a security best practice for opening links in a new tab that I found while researching: target="_blank" rel="noopener noreferrer"

function App() {

const [query, setQuery] = useState("")
const [articles, setArticles] = useState([])
const [noResults, setNoResults] = useState(false)

const fetchNews = async () => {

  const apiKey = import.meta.env.VITE_GNEWS_API_KEY
  const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&max=10&apikey=${apiKey}`

    try {

      const response = await fetch(url)
      const data = await response.json()

      console.log(data)

      setArticles(data.articles || [])
      setNoResults(true)
      
    } catch (error) {

      console.error("Error fetching news:", error)
      
    }

}

  return (

    <div>

      <h1>Pulse<sup>by Brief.io</sup></h1>

      <input
      
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search industry or brand"
      
      />

      <button onClick={fetchNews}>Search</button>

      {noResults && articles.length === 0 && (

        <p>No articles found. Try a different search term.</p>

        )}

      <div className="results">

        {articles.map((article) => (

          <div className="card" key={articles.url}>

            {article.image && <img src={article.image} alt={article.title} />}

            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p className="meta">

              {article.source?.name} | {new Date(article.publishedAt).toLocaleDateString()}

            </p>

            <a href={article.url} target="_blank" rel="noopener noreferrer">Read full article</a>

          </div>

        ))}

      </div>

    </div>

  )

} */

export default App