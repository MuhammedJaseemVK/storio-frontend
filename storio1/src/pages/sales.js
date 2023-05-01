import React, { useState } from 'react';
import axios from 'axios';
const Sales = () => {
  const [productName, setProductName] = useState('');
  const [predictions, setPredictions] = useState([]);

  const handleInputChange = (e) => {
    setProductName(e.target.value);
  };

  const handlePrediction = async () => {
    try {
      // Load the model and encoders
      const modelData = await axios.get('/salesmod.json');
      const modelDict = JSON.parse(modelData.data);
      const model = modelDict.model;
      const le_store_id = modelDict.le_store_id;
      const le_item_id = modelDict.le_item_id;
      const le_day_of_week = modelDict.le_day_of_week;
      const le_weather = modelDict.le_weather;
  
      // Load and preprocess the data
      const salesData = await axios.get('/salesdata.json');
      const data = salesData.data;
      data['date'] = pd.to_datetime(data['date']);
      data['month'] = data['date'].dt.month;
      data['year'] = data['date'].dt.year;
      data['store_id'] = le_store_id.transform(data['store_id']);
      data['item_id'] = le_item_id.transform(data['item_id']);
      data['day_of_week'] = le_day_of_week.transform(data['day_of_week']);
      data['weather'] = le_weather.transform(data['weather']);
      const X = data.drop(['date', 'sales', 'item_name'], axis=1);
  
      // Make predictions for the selected product
      const productData = X.filter((row) => row['item_id'] === productName);
      const predictions = model.predict(productData);
  
      setPredictions(predictions);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <label htmlFor="product-name">Enter product name:</label>
      <input type="text" id="product-name" value={productName} onChange={handleInputChange} />
      <button onClick={handlePrediction}>Predict sales</button>
      {predictions.length > 0 && (
        <div>
          <p>Predicted sales for {productName}:</p>
          <ul>
            {predictions.map((prediction, i) => (
              <li key={i}>{prediction}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sales;