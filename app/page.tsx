"use client"

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function Home() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {
          products.length < 1 ?
            <div className='w-full h-[100vh] overflow-y-hidden flex justify-center items-center'>
              <span className="loader"></span>
            </div>
            :
            products.map((product: any, index) => (
              <Card key={index} id={product.id} image={product.image} description={product.description} price={product.price} title={product.category} />
            ))
        }
      </div>

    </>
  );
}
