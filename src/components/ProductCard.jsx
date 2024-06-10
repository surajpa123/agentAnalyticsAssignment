import React from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../components/Modal";
import { useState } from "react";
import ProductForm from "./ProductForm";

const ProductCard = ({ product, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="border p-4 rounded shadow">
      {product?.image && (
        <div className="mb-4">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-64 h-64 object-cover m-auto"
          />
        </div>
      )}
      <h2 className="text-xl font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
        {product?.title}
      </h2>
      <p className="text-gray-700">${product?.price}</p>
      <p className="text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis">
        {product?.description}
      </p>
      <div className="mt-4 flex items-center space-x-4">
        <Link
          to={`/product/${product?.id}`}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          View Details
        </Link>

        <button
          onClick={handleEdit}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        >
          Edit Product
        </button>

        <button
          onClick={() => onDelete(product?.id)}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          productId={id}
          productDetail={product}
        >
          <ProductForm
            productDetail={product}
            onClose={handleCloseModal}
            id={product?.id}
          />
        </Modal>
      </div>
    </div>
  );
};

export default ProductCard;
