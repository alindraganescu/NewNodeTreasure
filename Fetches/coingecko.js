// const CoinGecko = require('coingecko-api');
// const CoinGeckoClient = new CoinGecko();

// const coinGecko = async () => {
//   let data = await CoinGeckoClient.coins.markets();
//   return data;
// };

// module.exports = coinGecko;

const axios = require('axios');

const getCoinGeckoData = async () => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: {
          vs_currency: 'usd',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('CoinGecko Error:', error);
    return null;
  }
};

module.exports = getCoinGeckoData;
