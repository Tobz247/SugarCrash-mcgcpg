import React from 'react';
import Header from './components/Header';
import ProductInfo from './components/ProductInfo';
import BuyerForm from './components/BuyerForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProductInfo />
        <BuyerForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;