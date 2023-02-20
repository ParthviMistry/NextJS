import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Avatar, Button, Box, Typography, Container } from "@mui/material";

import InputText from "@/components/form/InputText";

const Signup = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: "",
              name: "",
              contact: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is Required"),
              password: Yup.string().required("Password is Required"),
              name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Name is Required"),
              contact: Yup.string().matches(
                phoneRegExp,
                "Phone number is not valid"
              ),
            })}
            onSubmit={async (values) => {
              alert(values);
            }}
          >
            <Form>
              <InputText
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter email address"
              />
              <InputText
                label="Password"
                name="password"
                type="password"
                placeholder="Enter Password"
              />
              <InputText
                label="Name"
                name="name"
                type="name"
                placeholder="Enter Name"
              />
              <InputText
                label="Contact"
                name="contact"
                type="contact"
                placeholder="Enter Contact Number"
              />
              <Button type="submit">Submit</Button>
            </Form>
          </Formik>
        </Box>
      </Container>
    </>
  );
};

export default Signup;
