import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import styles from "@/styles/ProductCard.module.css";

export default function ProductCard({
  brand,
  title,
  category,
  price,
  images,
  thumbnail,
  description,
  addToCart,
}) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 350, borderRadius: "10px" }}>
      <div className={styles.cardImage}>
        <img src={thumbnail} alt="product" width={100} height={100} />
      </div>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          {title}
        </Typography>
        <Typography
          sx={{ mb: 1.5, fontSize: "2em", fontWeight: "800", lineHeight: 1 }}
        >
          &#8377;{price}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={styles.cardBtn}
          variant="contained"
          onClick={() => addToCart()}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
