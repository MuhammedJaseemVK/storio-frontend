import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/ShoppingList.module.css';

export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  
  useEffect(() => {
    localStorage.setItem("introseen", true)
  }, [])
  

  function handleNewItemChange(e) {
    setNewItem(e.target.value);
  }

  function handleNewItemSubmit(e) {
    e.preventDefault();
    setItems([...items, { id: Date.now(), text: newItem, purchased: false }]);
    setNewItem('');
  }

  function togglePurchased(id) {
    setItems(
      items.map(item => (item.id === id ? { ...item, purchased: !item.purchased } : item))
    );
  }

  function ShoppingListItem({ item, onTogglePurchased }) {
    return (
      <li className={`listItem ${styles.listItem} my-4`}>
        <span className={`text-lg ${item.purchased ? 'line-through text-gray-500' : 'text-black'}`}>
          {item.text}
        </span>
        <button
          onClick={() => onTogglePurchased(item.id)}
          className={`bg-${item.purchased ? 'green' : 'gray'}-500 text-white px-4 py-1 rounded hover:bg-${item.purchased ? 'green' : 'gray'}-400 ml-3 transition duration-200`}
        >
          {item.purchased ? 'Purchased' : 'Mark as Purchased'}
        </button>
      </li>
    );
  }

  return (
    <>
      <Head>
        <title>Shopping List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.container} min-h-screen pb-10 mylist`}>
        <h1 className="text-4xl font-bold text-center mt-7 p-5 text-white">Shopping List</h1>
        <form onSubmit={handleNewItemSubmit} className="mb-6">
          <input
            type="text"
            value={newItem}
            onChange={handleNewItemChange}
            placeholder="Type a new item"
            className="w-full p-2 border border-gray-300 rounded text-black bg-white focus:outline-none focus:border-blue-400 transition duration-200"
          />
        </form>
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <ul>
            {items.map(item => (
              <ShoppingListItem key={item.id} item={item} onTogglePurchased={togglePurchased} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
