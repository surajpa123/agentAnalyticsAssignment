import React from "react";
import ProductDetail from "../components/ProductDetail";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();

  console.log(id,'id')

  return (
    <div>
      <ProductDetail match={id} />
    </div>
  );
};

export default ProductDetailPage;
