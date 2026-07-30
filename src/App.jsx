import { useState } from "react"

function App() {

const [query, setQuery] = useState("")
const [articles, setArticles] = useState([])

const fetchNews = async () => {

  const apiKey = import.meta.env.VITE_GNEWS_API_KEY
  const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&max=10&apikey=${apiKey}`

    try {

      const response = await fetch(url)
      const data = await response.json()

      console.log(data)

      setArticles(data.articles || [])
      
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


    </div>

  )

}

export default App