import { GET_PRODUCTS, GET_PRODUCT_DETAILS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../actions/productActions';

const initialState = {
  products: [],
  productDetails: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
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
        products: state.products.filter((product) => product.id !== action.payload),
      };
    default:
      return state;
  }
};

export default productReducer;
