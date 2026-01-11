import { Card, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "@/components/form/Input";
import { isValidEmail } from "@/utils/validations/email";
import { Link } from "@mui/material";
import { useForgotPasswordMutation } from "@/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .test("valid-email", "Invalid email", (value) => isValidEmail(value ?? "")),
});

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [forgotPassword] = useForgotPasswordMutation();

  return (
    <Box sx={{ display: "grid", placeItems: "center", minHeight: "100%" }}>
      <Card variant="outlined" sx={{ p: 4, width: 400 }}>
        <Typography variant="h6" component="h1" gutterBottom align="center">
          Forgot password
        </Typography>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await forgotPassword(values).unwrap();
              toast.success("If an account exists, a reset link was sent.");
              navigate("/login");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form noValidate>
              <Box display="grid" gap={2}>
                <Input name="email" label="Email" type="email" />
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
