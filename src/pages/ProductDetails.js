import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
 import axios from "axios";

 import { useParams } from "react-router-dom";
import "../styles/ProductDetailsStyle.css";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`);
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="row container product-details">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top my-3"
            alt={product._name}
            height="400"
            width={"50px"}
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Product Details</h1>
          <hr />
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>
            Price :
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h6>
          <h6>Category : {product?.category?.name}</h6>

         
          
        </div>
      </div>
     
     
    </Layout>
  );
};

export default ProductDetails;