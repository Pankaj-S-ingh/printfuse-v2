const axios = require('axios');

const createWooProduct = async (product) => {
  try {
    const response = await axios.post(
      `${process.env.WOOCOMMERCE_STORE_URL}/products`,
      {
        name: product.name,
        type: 'simple',
        regular_price: product.price.toString(),
        description: product.description,
        images: [{ src: product.imageUrl }]
      },
      {
        auth: {
          username: process.env.WOOCOMMERCE_CONSUMER_KEY,
          password: process.env.WOOCOMMERCE_CONSUMER_SECRET,
        },
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error('WooCommerce API Error:', error.response?.data || error.message);
    return { success: false };
  }
};

module.exports = { createWooProduct };
