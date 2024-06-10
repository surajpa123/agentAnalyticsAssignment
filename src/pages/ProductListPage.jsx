import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../redux/actions/productActions";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import ProductForm from "../components/ProductForm";
import { toast } from "react-toastify";

const ProductListPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [isModalCreateProd, setIsModalCreateProd] = useState(false);

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getProducts());
    }
  }, []);

  useEffect(() => {
    const filtered = products?.filter((product) =>
      product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    toast.success("Product deleted successfully");
  };

  const handleCreateProd = () => {
    setIsModalCreateProd(true);
  };

  const handleCloseModal = () => {
    setIsModalCreateProd(false);
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border rounded"
        />
        <button
          onClick={handleCreateProd}
          className="ml-4 p-2 bg-green-500 text-white rounded"
        >
          Create Product
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          <>
            {filteredProducts?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onDelete={handleDelete}
              />
            ))}
          </>
        ) : (
          <div className="text-red-500">No products found.</div>
        )}
      </div>

      <Modal isOpen={isModalCreateProd} onClose={handleCloseModal}>
        <ProductForm onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default ProductListPage;
