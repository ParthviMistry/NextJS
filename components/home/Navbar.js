import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import styles from "@/styles/Navbar.module.css";

const LIST = [
  { text: "Home", href: "/" },
  { text: "Product", href: "/product" },
  { text: "Contact", href: "/contact" },
  { text: "Category", href: "/category" },
];

const Navbar = () => {
  const router = useRouter();

  const [activeId, setActiveId] = useState();

  const cart = useSelector((state) => state.cart.value.products);

  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Link href={"/"}>NextJS</Link>
        <div className={styles.nav__menulist}>
          {LIST.map((menu, id) => (
            <div
              onClick={() => {
                setActiveId(id);
              }}
              key={menu.text}
            >
              <Link
                href={menu.href}
                className={styles.nav__link}
                active={activeId === id}
              >
                {menu.text}
              </Link>
            </div>
          ))}
          <div>
            <ShoppingCartIcon onClick={() => router.push("/cartlist")} />
            <span>{cart?.reduce((a, v) => (a = a + v.quantity), 0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
