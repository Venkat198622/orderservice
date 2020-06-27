const config  = require('../../config').get();
const axios = require('axios');

const loadProducts = async () => {
  const url = `${config.wolliesResourcesAPI}/productswe?token=${config.userDetails.token}`;
  const response = await axios.get(url);

  return response.data
}

const loadShoppingHistory = async () => {
  const url = `${config.wolliesResourcesAPI}/shopperHistory?token=${config.userDetails.token}`;
  const response = await axios.get(url);

  return response.data
}

module.exports = {
  loadProducts,
  loadShoppingHistory
}
