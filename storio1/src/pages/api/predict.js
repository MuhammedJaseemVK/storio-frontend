// pages/api/predict_sales.js
// import * as tf from '@tensorflow/tfjs-node';
// import { DataFrame } from 'pandas-js';

// // Load the saved model and preprocessed dataset
// const modelPath = '/sales_model.pkl';
// const dataPath = '/preprocessed_salesdata.json';
// const model = await tf.node.loadSavedModel(modelPath);
// const preprocessedData = require(dataPath);

// // Function to preprocess input data
// const preprocessInput = (inputData) => {
//   // Convert date to datetime and extract month
//   inputData.date = new Date(inputData.date);
//   inputData.month = inputData.date.getMonth() + 1;
//   delete inputData.date;

//   // Encode categorical features
//   const storeIdColumns = preprocessedData.columns.filter((col) => col.startsWith('store_id_'));
//   const itemIdColumns = preprocessedData.columns.filter((col) => col.startsWith('item_id_'));
//   const dayOfWeekColumns = preprocessedData.columns.filter((col) => col.startsWith('day_of_week_'));
//   const weatherColumns = preprocessedData.columns.filter((col) => col.startsWith('weather_'));
//   const storeId = `store_id_${inputData.store_id}`;
//   const itemId = `item_id_${inputData.item_id}`;
//   const dayOfWeek = `day_of_week_${inputData.day_of_week}`;
//   const weather = `weather_${inputData.weather}`;
//   const encodedData = {
//     ...inputData,
//     [storeId]: 1,
//     [itemId]: 1,
//     [dayOfWeek]: 1,
//     [weather]: 1,
//   };
//   delete encodedData.store_id;
//   delete encodedData.item_id;
//   delete encodedData.day_of_week;
//   delete encodedData.weather;

//   // Create a DataFrame from the preprocessed input data
//   const df = new DataFrame([encodedData]);

//   // Reorder the columns to match the preprocessed dataset
//   const columns = preprocessedData.columns.filter((col) => col !== 'sales');
//   return df.reorder([...columns, 'sales']).fillna(0);
// };

export default async (req, res) => {
  if (req.method === 'POST') {
    console.log(req);
    // try {
    //   const { product } = req.body;
    //   const inputData = preprocessInput(product);
    //   const inputTensor = tf.tensor2d(inputData.values, [1, inputData.shape[1]]);
    //   const prediction = model.predict(inputTensor);
    //   const salesPrediction = prediction.dataSync()[0];

    //   res.status(200).json({ salesPrediction });
    // } catch (error) {
    //   res.status(500).json({ error: error.message });
    // }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
