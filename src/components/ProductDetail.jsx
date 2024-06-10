import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../redux/actions/productActions";

const ProductDetail = ({ match }) => {
  const productDetails = useSelector((state) =>
    state.products?.products?.filter((ele) => ele.id == match)
  );

  return (
    <div>
      {productDetails ? (
        <div className="border p-4 rounded shadow">
          {productDetails[0]?.image && (
            <div className="mb-4">
              <img
                src={productDetails[0]?.image}
                alt={productDetails[0]?.title}
                className="w-full h-64 object-cover"
              />
            </div>
          )}
          <h2 className="text-xl font-bold">{productDetails[0]?.title}</h2>
          <p className="text-gray-700">${productDetails[0]?.price}</p>
          <p className="text-gray-600">{productDetails[0]?.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
