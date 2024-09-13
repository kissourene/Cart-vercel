import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Produits from '../components/Produits';

const Accueil = () => {
  const products = [
    { id: 1, name: "Produit A", price: 19.99 },
    { id: 2, name: "Produit B", price: 14.99 },
    { id: 3, name: "Produit C", price: 24.99 }
  ];

  return (
    <>
      <Header />
      <main>
        <h1>Bienvenue sur notre site de vente</h1>
        <Produits products={products} />
      </main>
      <Footer />
    </>
  );
};

export default Accueil;
