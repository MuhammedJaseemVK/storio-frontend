import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

const ProductRecommendation = () => {
  const [model, setModel] = useState(null);
  const [userPurchases, setUserPurchases] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [orders, setorders] = useState([])
  useEffect(() => {
    try {
      const fetchorders = async () => {
        let username = localStorage.getItem('username')
        let orders = await fetchProfile(username)
        console.log(orders)
        setUserPurchases([orders.data[0].items[0].index || 310])
        setorders(orders.data)
      }
      fetchorders()
    } catch (error) {
      console.log(error)
      alert("Error!")
    }

  }, [])

  const fetchProfile = username => {
    return axios.get(`https://storio.virtualdom.tech/payment/orders?id=${username}`)
  };

  useEffect(() => {
    fetch('/model.json')
      .then((response) => response.json())
      .then((data) => setModel(data));
  }, []);

  useEffect(() => {
    if (model && userPurchases) {
      const recs = getUserRecommendations(userPurchases, model);
      setRecommendations(recs);
      setShowNotification(true);
    }
  }, [model, userPurchases]);

  const getUserRecommendations = (userPurchases, model) => {
    const cosine_sim = model.cosine_sim;
    const products = model.products;

    let topRecommendations = [];

    userPurchases.forEach((purchase) => {
      const product_idx = products.findIndex((product) => product.index === purchase);

      const sim_scores = enumerate(cosine_sim[product_idx]).sort((a, b) => b[1] - a[1]);
      const top_indices = sim_scores.slice(7,10).map(([idx, _]) => idx);

      const recommendations = top_indices.map((idx) => products[idx]);
      topRecommendations = [...topRecommendations, ...recommendations];
    });

    return topRecommendations;
  };

  const enumerate = (arr) => arr.map((elem, idx) => [idx, elem]);

  const closeNotification = () => {
    setShowNotification(false);
  };

  const colorScheme = {
    background: 'bg-blue-100',
    border: 'border-blue-400',
    text: 'text-blue-900',
  };

  if (showNotification) {
    if (window.innerWidth <= 640) {
      colorScheme.background = 'bg-green-100';
      colorScheme.border = 'border-green-400';
      colorScheme.text = 'text-green-900';
    }
  }

  return (
    <div className="fixed w-full absolute bottom-10 z-50">
      {showNotification && (
        <div className="bg-gradient-to-tl from-blue-600 to-black via-black to-black via-black to-black via-black to-black via-black to-black via-black border-gray-300 border rounded-lg shadow-lg text-white text-center p-4 rounded-md rounded-md max-h-[450px] sm:max-h-[450px] overflow-y-auto">
          <h2 className="font-bold text-lg mb-2 p-2">You may also like these:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recommendations.map((product) => (
              <div key={product.index} className="flex bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform transition duration-200">
                <img src="/dosa.jpeg" alt={product.product} className="object-contain w-1/3 h-24 mt-2" />
                <div className="p-2 w-2/3">
                  <h3 className="font-semibold text-gray-700 text-lg mb-2">{product.product}</h3>
                  <p className="text-gray-700 font-bold text-lg mb-2">MRP: {product.sale_price}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="absolute right-0 top-0 mt-2 mr-2" onClick={closeNotification}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductRecommendation;
