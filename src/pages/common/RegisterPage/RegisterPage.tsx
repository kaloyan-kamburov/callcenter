import { Card, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "@/components/form/Input/Input";
import { isValidEmail } from "@/utils/validations/email";
import { isStrongPassword } from "@/utils/validations/password";
import { Link } from "@mui/material";
import { useRegisterMutation } from "@/features/auth/authApi";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .test("valid-email", "Invalid email", (value) => isValidEmail(value ?? "")),
  password: Yup.string()
    .required("Password is required")
    .test(
      "strong-password",
      "At least 8 chars, 1 uppercase, 1 lowercase, 1 number",
      (value) => isStrongPassword(value ?? ""),
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export default function RegisterPage() {
  const navigate = useNavigate();
  const [register] = useRegisterMutation();

  return (
    <Box sx={{ display: "grid", placeItems: "center", minHeight: "100%" }}>
      <Card variant="outlined" sx={{ p: 4, width: 400 }}>
        <Typography variant="h6" component="h1" gutterBottom align="center">
          Registration
        </Typography>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const { name, email, password } = values;
              await register({ name, email, password }).unwrap();
              navigate("/login");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form noValidate>
              <Box display="grid" gap={2}>
                <Input name="name" label="Name" />
                <Input name="email" label="Email" type="email" />
                <Input
                  name="password"
                  label="Password"
                  type="password"
                  showPasswordToggle
                />
                <Input
                  name="confirmPassword"
                  label="Repeat password"
                  type="password"
                  showPasswordToggle
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
                <Box display="flex" justifyContent="space-between">
                  <Link href="/login" underline="hover">
                    login
                  </Link>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Card>
    </Box>
  );
}
