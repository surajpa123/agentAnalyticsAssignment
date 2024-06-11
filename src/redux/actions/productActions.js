import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUSTE";
export const GET_PRODUCTS_SUCESS = "GET_PRODUCTS_SUCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

const BASE_URL = "https://product-data-rfrw.onrender.com";

export const getProducts = () => async (dispatch) => {
  const getProducts = async () => {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      dispatch({
        type: GET_PRODUCTS_FAILURE,
        error: "Error fetching products",
      });
    }
  };
  const newProd = await getProducts();

  dispatch({ type: GET_PRODUCTS_SUCESS, payload: newProd });
};

export const getProductDetails = (id) => async (dispatch) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  dispatch({ type: GET_PRODUCT_DETAILS, payload: response.data });
};

export const createProduct = (product) => async (dispatch) => {
  const createProduct = async (product) => {
    try {
      const response = await axios.post(`${BASE_URL}/products`, product);
      return response.data;
    } catch (error) {
      throw new Error("Error creating product");
    }
  };

  const newProd = await createProduct(product);

  dispatch({ type: CREATE_PRODUCT, payload: newProd });
};

export const updateProduct = (id, updatedProduct) => async (dispatch) => {
  const updateProduct = async (id, updatedProduct) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/products/${id}`,
        updatedProduct
      );
      return response.data;
    } catch (error) {
      throw new Error("Error updating product");
    }
  };

  const newupdatedProduct = await updateProduct(id, updatedProduct);

  dispatch({ type: UPDATE_PRODUCT, payload: newupdatedProduct });
};

export const deleteProduct = (id) => async (dispatch) => {
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/products/${id}`);
      return id;
    } catch (error) {
      throw new Error("Error deleting product");
    }
  };

  const newupdatedProduct = await deleteProduct(id);

  dispatch({ type: DELETE_PRODUCT, payload: newupdatedProduct });
};
