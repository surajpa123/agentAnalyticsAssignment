import React from 'react';
import ProductForm from '../components/ProductForm';

const EditProductPage = ({ match }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Edit Product</h1>
      <ProductForm match={match} />
    </div>
  );
};

export default EditProductPage;
