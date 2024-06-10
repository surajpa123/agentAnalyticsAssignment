import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  updateProduct,
  getProductDetails,
} from "../redux/actions/productActions";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';


const ProductForm = ({ id, productDetail, onClose }) => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {productDetails,loading} = useSelector((state) => state.products.productDetails);

  useEffect(() => {
    if (!id && !productDetail) {
      dispatch(getProductDetails(id));
    } else {
      setProduct(productDetail);
    }
  }, [dispatch, id, productDetail]);

  useEffect(() => {
    if (id && productDetail) {
      setProduct(productDetail);
    }
  }, [id, productDetail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateProduct(id, product));
      toast.success("Product updated successfully");
      onClose();
    } else {
      const newProduct = { ...product, id: uuidv4() };
      dispatch(createProduct(newProduct));
      toast.success("Product created successfully");
      onClose();
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={product?.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          value={product?.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={product?.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image URL</label>{" "}
        {/* Change label */}
        <input
          type="text"
          name="image"
          value={product?.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      {product?.image && (
        <div className="mb-4">
          <img
            src={product?.image}
            alt="Product"
            className="w-full h-64 object-cover"
          />
        </div>
      )}
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        {id ? "Update" : "Create"} Product
      </button>
    </form>
  );
};

export default ProductForm;
