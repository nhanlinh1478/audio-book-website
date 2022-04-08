// MUI COMPONENTS
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LoadingButton from "@mui/lab/LoadingButton";

// FORMIK COMPONENTS
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";

// YUP
import * as Yup from "yup";

const initialValues = {
  newPassword: "",
  confirmedPassword: "",
};

const AuthResetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string().required("Field is required"),
  confirmedPassword: Yup.string()
    .required("Field is required")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});
const AuthResetPassword = () => {
  const onSubmit = async (values) => {
    console.log(values);
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
          <Grid container>
            <Grid item xs>
              <Link
                to="/auth/signin"
                variant="body2"
                underline="none"
                sx={{
                  cursor: "pointer",
                }}
              >
                Sign in
              </Link>
            </Grid>
            <Grid item>
              <Link
                to="/auth/signup"
                variant="body2"
                underline="none"
                sx={{
                  cursor: "pointer",
                }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default AuthResetPassword;
