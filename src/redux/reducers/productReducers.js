import {
  GET_PRODUCTS,
  GET_PRODUCT_DETAILS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCESS,
  GET_PRODUCTS_FAILURE,
} from "../actions/productActions";

const initialState = {
  products: [],
  productDetails: {},
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_PRODUCTS_SUCESS:
      return { ...state, products: action.payload, loading: false };

    case GET_PRODUCTS_FAILURE:
      return { ...state, error: action.error, loading: false };

    case GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    case CREATE_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id == action.payload.id ? action.payload : product
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
