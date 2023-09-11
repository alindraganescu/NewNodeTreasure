// const axios = require('axios');
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }

// const newsData = async (page = 0) => {
//   let response = await axios.get(
//     `https://newsdata.io/api/1/news?apikey=${process.env.NewsApiKey}&language=en&q=cryptocurrency&page=${page}`
//   );
//   return response.data;
// };

// module.exports = newsData;

// const axios = require('axios');

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }

// let nextPage = ''; // Variable to store nextPage string

// // const fetchInitialNews = async () => {
// //   let url = `https://newsdata.io/api/1/news?apikey=${process.env.NewsApiKey}&language=en&q=cryptocurrency`;
// //   const response = await axios.get(url);
// //   nextPage = response.data.nextPage; // Save nextPage
// //   return response.data;
// // };

// const fetchInitialNews = async () => {
//   try {
//     let url = `https://newsdata.io/api/1/news?apikey=${process.env.NewsApiKey}&language=en&q=cryptocurrency`;
//     const response = await axios.get(url);
//     nextPage = response.data.nextPage; // Save nextPage
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching initial news:', error);
//   }
// };

// const fetchNextNews = async () => {
//   let url = `https://newsdata.io/api/1/news?apikey=${process.env.NewsApiKey}&language=en&q=cryptocurrency&page=${nextPage}`;
//   const response = await axios.get(url);
//   nextPage = response.data.nextPage; // Update nextPage
//   return response.data;
// };

// module.exports = { fetchInitialNews, fetchNextNews, nextPage };

const axios = require('axios');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

let nextPage = null; // Initialize nextPage to null

const getNewsData = async (newsPage) => {
  let url = `https://newsdata.io/api/1/news?apikey=${process.env.NewsApiKey}&language=en&q=cryptocurrency`;

  // Include the page parameter only if newsPage exists
  if (newsPage) {
    url += `&page=${newsPage}`;
  }

  try {
    const response = await axios.get(url);
    nextPage = response.data.nextPage; // Update nextPage for the next call
    return response.data;
  } catch (error) {
    console.error('News API Error:', error);
    return null;
  }
};

module.exports = { getNewsData, nextPage };
