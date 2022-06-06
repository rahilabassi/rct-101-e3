import axios from "axios";
import React from "react";
// import axios from "axios";
import { useEffect } from "react";
const Products = () => {
  const [productlist,setProductlist]=React.useState([]);
  useEffect(() => {
    const getData=async ()=>{
      let res = axios.get("http://localhost:8080/products")
      .then((resp) => setProductlist(resp.data));
    }
    getData();
    // console.log(productlist)
  }, []);
  
  
  return <div>
    {productlist.map((el)=>{
      return (
        <div key={el.id}>
          <h1>{el.name}</h1>
          <p>{el.description}</p>
          <button>Add to Cart</button>
        </div>
      )
    })}
  </div>;
};

export default Products;
