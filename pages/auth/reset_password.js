// MUI COMPONENTS
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LoadingButton from "@mui/lab/LoadingButton";
import { toast } from "react-toastify";

// FORMIK COMPONENTS
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";

// YUP
import * as Yup from "yup";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";

const AuthResetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string().required("Field is required"),
  confirmedPassword: Yup.string()
    .required("Field is required")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});
const AuthResetPassword = ({ forgotPasswordCode }) => {
  const router = useRouter();
  const { jwt } = useSelector((state) => state.storeManage);
  const initialValues = {
    newPassword: "",
    confirmedPassword: "",
    forgotPasswordCode,
  };
  useEffect(() => {
    if (jwt != "null") {
      router.push("/");
    }
  }, [jwt]);

  const onSubmit = async (values) => {
    if (values.newPassword !== values.confirmedPassword) {
      toast.error("Passwords must match !");
      return;
    }
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/ResetPassword/${values.forgotPasswordCode}`,
      { password: values.newPassword }
    );

    if (res.status === 200) {
      if (res.data.success == true) {
        toast.success(res.data.message);
        // router.push("/auth/signin");
      } else {
        toast.error(res.data.message);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Enter a new password
        </Typography>

        <Box sx={{ mt: 4, width: "100%" }}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={AuthResetPasswordSchema}
            validateOnBlur={false}
          >
            {(formik) => {
              return (
                <Form>
                  <Field
                    component={TextField}
                    margin="normal"
                    fullWidth
                    name="newPassword"
                    label="New password"
                    type="password"
                    //   placeholder="Enter your new password here"
                  />
                  <Field
                    component={TextField}
                    margin="normal"
                    fullWidth
                    name="confirmedPassword"
                    label="Confirm new password"
                    type="password"
                    //   placeholder="Enter your new password here"
                  />

                  <LoadingButton
                    fullWidth
                    sx={{
                      mt: 3,
                      mb: 2,
                    }}
                    disabled={!formik.isValid}
                    type="submit"
                    loading={formik.isSubmitting}
                    variant="contained"
                  >
                    Reset
                  </LoadingButton>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Box>
    </Container>
  );
};
export default AuthResetPassword;

export async function getServerSideProps(context) {
  const { forgotPasswordCode } = context.query;
  if (!forgotPasswordCode) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/signin",
      },
    };
  }
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/CheckForgotPasswordCode/${forgotPasswordCode}`
  );

  if (res.status === 200) {
    if (res.data.success == true) {
      return {
        props: { forgotPasswordCode },
      };
    }
  }
  return {
    redirect: {
      permanent: false,
      destination: "/auth/signin",
    },
  };
}
