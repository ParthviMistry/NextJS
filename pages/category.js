import React, { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import Navbar from "@/components/home/Navbar";
import CategoryItem from "@/components/category/CategoryItem";
import CategoryName from "@/components/category/CategoryName";

import styles from "@/styles/Category.module.css";

export const fetchdata = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};

const category = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState(categories);

  useEffect(() => {
    fetchdata().then((res) => {
      setCategories(res);
      setItems(res);
    });
  }, []);

  const filterItems = (category) => {
    const newItems = categories?.filter((item) => item.category === category);
    setItems(newItems);
  };

  return (
    <div>
      <Navbar />
      <section className={styles.menu}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={[...new Set(categories?.map((i) => i.category))]}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Serach Category"
              onSelect={(e) => filterItems(e.target.value)}
            />
          )}
        />
        <div className={styles.title}>
          <h2>Categories</h2>
          <div className={styles.underline}></div>
        </div>
        <CategoryName
          categories={[...new Set(categories?.map((i) => i.category))]}
          filterItems={filterItems}
        />
        <CategoryItem items={items} />
      </section>
    </div>
  );
};

export default category;
