import { Card, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "@/components/form/Input";
import { isStrongPassword } from "@/utils/validations/password";
import { useResetPasswordMutation } from "@/features/auth/authApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .test(
      "strong-password",
      "At least 8 chars, 1 uppercase, 1 lowercase, 1 number",
      (value) => isStrongPassword(value ?? "")
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [resetPassword] = useResetPasswordMutation();

  return (
    <Box sx={{ display: "grid", placeItems: "center", minHeight: "100%" }}>
      <Card variant="outlined" sx={{ p: 4, width: 400 }}>
        <Typography variant="h6" component="h1" gutterBottom align="center">
          Reset password
        </Typography>
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const token = searchParams.get("token");
              if (!token) {
                toast.error("Reset token is missing.");
                return;
              }
              await resetPassword({ token, password: values.password }).unwrap();
              toast.success("Password updated. Please login.");
              navigate("/login");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form noValidate>
              <Box display="grid" gap={2}>
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
                <Button type="submit" variant="contained" disabled={isSubmitting}>
                  Submit
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Card>
    </Box>
  );
}

