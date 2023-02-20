import * as React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import InputText from "@/components/form/InputText";

export default function ShareModal({ showModal, setShowModal, cart }) {
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Dialog open={showModal} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>Share cart items</DialogContentText>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is Required"),
            })}
            onSubmit={async (values) => {
              await fetch("/api/sendgrid", {
                body: JSON.stringify({
                  email: values.email,
                  cartItem: cart,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
                method: "POST",
              });
            }}
          >
            <Form>
              <InputText
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter email address"
              />
              <Button type="submit">Submit</Button>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}
