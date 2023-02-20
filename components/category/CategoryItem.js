import React from "react";
import styles from "@/styles/Category.module.css";

const CategoryItem = ({ items }) => {
  return (
    <div className={styles.sectionCenter}>
      {items?.map((menuItem) => {
        const { id, title, img, thumbnail, description, price } = menuItem;
        return (
          <article key={id} className={styles.menuItem}>
            <img src={thumbnail} alt={title} className={styles.photo} />
            <div className={styles.itemInfo}>
              <header>
                <h4>{title}</h4>
                <h4 className={styles.price}>&#8377;{price}</h4>
              </header>
              <p className={styles.itemText}>{description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default CategoryItem;
