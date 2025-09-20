"use client";

import { useEffect, useState } from "react";
import Banner from "./banner";
import ProductsSection from "./ProductsSection";
import {fetchProducts} from '../api/productApi.js'


const sectionMap: Record<string, any> = {
  products: ProductsSection,
};

export default function HomePage() {

//   let data = {
//   "sections": [
//     {
//       "type": "hero",
//       "title": "Welcome to My Store",
//       "subtitle": "Best products at best prices",
//       "image": "/images/hero.jpg"
//     },
//     {
//       "type": "products",
//       "title": "Featured Products",
//       "items": [
//         { "id": 1, "name": "Laptop", "price": "$1200", "image": "/images/products/laptop.jpg" },
//         { "id": 2, "name": "Phone", "price": "$800", "image": "/images/products/phone.jpg" }
//       ]
//     },
//     {
//       "type": "testimonial",
//       "quote": "Great service and amazing products!",
//       "author": "John Doe"
//     }
//   ]
// };

const [data,setData] = useState()

useEffect (()=>{
  fetchProducts().then(setData)
},[]);
  return (
    <>
    <Banner
        title="Welcome to My Store"
        subtitle="Shop the best products at the best prices"
        image="/images/banner.jpg"
      />

      <div/>
      {data?.sections.map((section, idx) => {
        const SectionComponent = sectionMap[section.type];
        if (!SectionComponent) return null;
        return <SectionComponent key={idx} {...section} />;
      })}
    </>
  );
}