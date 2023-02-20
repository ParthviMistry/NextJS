import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  clearCart,
  decreaseToCart,
  removeFromCart,
} from "../store/cart";

import Navbar from "@/components/home/Navbar";
import ShareModal from "@/components/cart/ShareModal";

import styles from "@/styles/CartList.module.css";

const Cartlist = () => {
  const route = useRouter();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const cart = useSelector((state) => state.cart.value);
  let subTotal = 0;

  return (
    <div>
      <Navbar />
      {showModal && (
        <ShareModal
          showModal={showModal}
          setShowModal={setShowModal}
          cart={cart?.products}
        />
      )}
      <div className={styles.cartContainer}>
        <h2>Your Cart</h2>
        {cart?.products?.length === 0 ? (
          <div className={styles.cartEmpty}>
            <p>Your cart is currently empty</p>
            <div className={styles.startShopping}>
              <Link href={"/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.cartSummary}>
              <button
                className={styles.clearBtn}
                onClick={() => setShowModal(true)}
              >
                Share cart
              </button>
            </div>
            <div className={styles.titles}>
              <h3 className={styles.productTitle}>Product</h3>
              <h3 className={styles.price}>Price</h3>
              <h3 className={styles.quantity}>Quantity</h3>
              <h3 className={styles.total}>Total</h3>
            </div>
            <div>
              {cart?.products &&
                cart?.products.map((cartItem) => (
                  <div className={styles.cartItems} key={cartItem.data.id}>
                    <div className={styles.cartProduct}>
                      <img
                        src={cartItem.data.thumbnail}
                        alt={cartItem.data.title}
                      />
                      <div>
                        <h3>{cartItem.data.title}</h3>
                        <p>{cartItem.data.description}</p>
                        <button
                          onClick={() =>
                            dispatch(removeFromCart(cartItem.data))
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className={styles.cartProductPrice}>
                      &#8377;{cartItem.data.price}
                    </div>
                    <div className={styles.cartProductQuantity}>
                      <button
                        onClick={() => dispatch(decreaseToCart(cartItem))}
                      >
                        -
                      </button>
                      <div className={styles.count}>{cartItem.quantity}</div>
                      <button
                        onClick={() =>
                          dispatch(
                            addToCart({
                              product: cartItem.product,
                              data: cartItem.data,
                            })
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className={styles.cartProductTotalPrice}>
                      &#8377;{cartItem.data.price * cartItem.quantity}
                    </div>
                    {(subTotal += cartItem.data.price * cartItem.quantity)}
                  </div>
                ))}
            </div>
            <div className={styles.cartSummary}>
              <button
                className={styles.clearBtn}
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
              <div className={styles.cartCheckout}>
                <div className={styles.subtotal}>
                  <span>Subtotal</span>
                  <span className={styles.amount}>
                    <i class="fa fa-rupee"></i>
                    &#8377;{subTotal}
                  </span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>

                <button>Check out</button>

                <div className={styles.continueShopping}>
                  <Link href={"/"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span onClick={() => route.push("/product")}>
                      Continue Shopping
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cartlist;
