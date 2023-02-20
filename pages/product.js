import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid";

import { addToCart } from "../store/cart";
import { fetchdata } from "./category";

import Navbar from "@/components/home/Navbar";
import ProductCard from "@/components/cart/ProductCart";

export default function Product() {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchdata().then((res) => {
      setData(res);
    });
  }, []);

  const handleClick = (id, item) => {
    dispatch(
      addToCart({
        product: id,
        data: item,
      })
    );
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Grid container spacing={2} className="card-md-dis">
          {data.map((item) => (
            <Grid key={item._id} item md={4}>
              <ProductCard
                {...item}
                addToCart={() => handleClick(item.id, item)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
