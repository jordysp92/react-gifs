import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  //   const handleAdd = () => {
  //     // setCategories([...categories, "Bleach"]);
  //     setCategories((data) => [...data, "bleach"]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr></hr>
      <ol>
        {categories.map((category, i) => {
          return <GifGrid key={category} category={category}></GifGrid>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
