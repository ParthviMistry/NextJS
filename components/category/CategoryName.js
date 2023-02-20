import React from "react";
import styles from "@/styles/Category.module.css";

const CategoryName = ({ categories, filterItems }) => {
  return (
    <div className={styles.btnContainer}>
      {categories?.map((category, index) => {
        return (
          <button
            type="button"
            className={styles.filterBtn}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryName;
