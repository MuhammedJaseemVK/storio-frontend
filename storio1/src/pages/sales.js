import { useState } from 'react';

function SalesChart() {
  const [productName, setProductName] = useState('');
  const [chartData, setChartData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Make a request to the Python server
    const response = await fetch(`http://127.0.0.1:5000/api/sales?productName=${productName}`);

    // Parse the response data as JSON
    const data = await response.json();

    // Set the chart data state
    setChartData(data);
  };

  return (
    <div className="flex justify-center bg-gray-100 h-screen">
      <div className="w-2/3 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8">View Sales Data</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4 font-bold text-gray-700">
            Product Name:
            <input
              type="text"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Get Sales Forecasting
          </button>
        </form>
        {chartData && (
          <div className="flex justify-between mt-8">
            <img src={`data:image/png;base64,${chartData.plotBase64}`} alt="Sales over time" className="w-1/2 rounded-lg shadow-lg" />
            <img src={`data:image/png;base64,${chartData.plotBase64Forecast}`} alt="Sales forecast" className="w-1/2 rounded-lg shadow-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesChart;