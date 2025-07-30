import React, { useEffect, useState } from 'react';
import NewsItems from './newsItems';

const Newsboard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", data); // for debugging
        setArticles(data.articles || []);
      })
      .catch(err => {
        console.error("Error fetching articles:", err);
      });
  }, []);

  return (
    <div>
      <h2 className='text-center'>Latest <span className="badge text-bg-danger">News</span></h2>
      <div className="d-flex flex-wrap justify-content-center">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItems
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <p>Loading or No Articles Found</p>
        )}
      </div>
    </div>
  );
};

export default Newsboard;
