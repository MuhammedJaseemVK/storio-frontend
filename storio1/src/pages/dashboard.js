import React from "react";
import Head from "next/head";
import { getRecommendations } from "recommendation";
import data_new from "/output_data.json";
import user_interaction from "/user_interaction_data.json";

const Recommendations = ({ recommendations }) => {
  return (
    <>
      <Head>
        <title>Recommendations</title>
      </Head>
      <div className="container mx-auto my-4">
        <h1 className="text-2xl font-bold mb-4">Recommendations</h1>
        <div className="grid grid-cols-4 gap-4">
          {recommendations.map((product) => (
            <div key={product.index} className="bg-white p-4 shadow-md">
              <h2 className="text-lg font-bold">{product.product}</h2>
              <p className="text-gray-500">{product.brand}</p>
              <p className="text-gray-700 mt-2">
                {product.description.slice(0, 100)}...
              </p>
              <div className="mt-4">
                {product.category.map((category) => (
                  <span
                    key={category}
                    className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-xs mr-2"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  // Get user purchase history
  const userPurchases = user_interaction.map((interaction) => interaction.product);

  // Get recommendations
  const recommendations = getRecommendations(data_new, userPurchases);

  return {
    props: {
      recommendations,
    },
  };
}

export default Recommendations;