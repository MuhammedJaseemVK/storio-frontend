import { useState, useEffect } from 'react';
import React from 'react';

const ProductRecommendation = () => {
  const [model, setModel] = useState(null);
  const [productId, setProductId] = useState(1);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch('/model.json')
      .then((response) => response.json())
      .then((data) => setModel(data));
  }, []);

  const getRecommendations = (productId, model) => {
    const cosine_sim = model.cosine_sim;
    const products = model.products;
    const product_idx = products.findIndex((product) => product.index === productId);

    const sim_scores = enumerate(cosine_sim[product_idx]).sort((a, b) => b[1] - a[1]);
    const top_indices = sim_scores.slice(1, 6).map(([idx, _]) => idx);

    return top_indices.map((idx) => products[idx]);
  };

  const handleGetRecommendations = () => {
    const recs = getRecommendations(productId, model);
    setRecommendations(recs);
  };

  const enumerate = (arr) => arr.map((elem, idx) => [idx, elem]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Product Recommendations</h1>
        <input
          type="number"
          value={productId}
          onChange={(e) => setProductId(parseInt(e.target.value))}
          className="w-full mb-4 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={handleGetRecommendations}
          className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200"
        >
          Get Recommendations
        </button>
        <ul className="mt-6">
          {recommendations.map((product) => (
            <li
              key={product.index}
              className="py-2 px-4 bg-gray-200 mb-2 rounded-md flex justify-between items-center"
            >
              <span className="text-sm font-semibold">
                {product.product} (Category: {product.category.join(', ')})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductRecommendation;
