import axios from 'axios';

export const fetchProducts = () => axios.get('http://localhost:3001');
export const fetchProductDetails = (id) => axios.get(`http://localhost:3001/${id}`);
export const createProduct = (product) => axios.post('https://fakestoreapi.com/products', product);
export const updateProductApi = (id, updatedProduct) => axios.patch(`https://fakestoreapi.com/products/${id}`, updatedProduct);
export const deleteProduct = (id) => axios.delete(`https://fakestoreapi.com/products/${id}`);
