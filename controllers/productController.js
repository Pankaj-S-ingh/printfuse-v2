const Product = require('../models/product');
const { createWooProduct } = require('../services/woocommerceService');

exports.createProduct = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  try {
    const product = await Product.create({
      name,
      description,
      price,
      imageUrl,
      userId: req.userId
    });

    const result = await createWooProduct(product);
    product.status = result.success ? 'Synced to WooCommerce' : 'Sync Failed';
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({ userId: req.userId });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
