import Head from "next/head";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Navbar from "@/components/home/Navbar";
import styles from "@/styles/Home.module.css";

const bgImages = [
  "https://thumbs.dreamstime.com/b/online-shopping-payment-man-using-tablet-cart-icon-digital-marketing-banking-finance-dark-blue-background-172987675.jpg",
  "https://thumbs.dreamstime.com/b/woman-using-mobile-payments-online-shopping-icon-customer-network-connection-digital-marketing-m-banking-omni-channel-124448929.jpg",
  "https://thumbs.dreamstime.com/b/busy-interrior-shopping-mall-guangzhou-china-modern-shopping-center-hall-store-center-shop-window-46267583.jpg",
];

export default function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Navbar />
      <Carousel
        className={styles.home__carousel}
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {bgImages.map((item, i) => (
          <img
            key={i}
            src={item}
            alt={`Amazon Background ${i}`}
            className={styles.home__image}
          />
        ))}
      </Carousel>
    </div>
  );
}
