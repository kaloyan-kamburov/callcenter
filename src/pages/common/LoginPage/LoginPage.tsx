import { Card, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "@/components/form/Input";
import { useLoginMutation } from "@/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import type { AxiosError } from "axios";
import Cookies from "js-cookie";

export default function LoginPage() {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  return (
    <Box sx={{ display: "grid", placeItems: "center", minHeight: "100%" }}>
      <Card variant="outlined" sx={{ p: 4, width: 400 }}>
        <Typography variant="h6" component="h1" gutterBottom align="center">
          Login
        </Typography>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email")
              .required("Email is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await login({
                ...values,
                onError: (err: AxiosError) => {
                  const status = err.response?.status;
                  if (status === 401) {
                    toast.error("Invalid email or password.");
                    return;
                  }
                  const data = err.response?.data as unknown;
                  let message = err.message;
                  if (typeof data === "string") message = data;
                  else if (
                    data &&
                    typeof data === "object" &&
                    "message" in (data as Record<string, unknown>)
                  ) {
                    const m = (data as Record<string, unknown>).message;
                    if (typeof m === "string") message = m;
                  }
                  toast.error(message || "Wrong email or password.");
                },
              }).unwrap();
              const cookieOptions = { path: "/", sameSite: "lax" as const };
              if (response?.token) {
                Cookies.set("authToken", response.token, cookieOptions);
              }
              if (response?.user) {
                Cookies.set(
                  "authUser",
                  JSON.stringify(response.user),
                  cookieOptions
                );
              }
              navigate("/");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form noValidate>
              <Box display="grid" gap={2}>
                <Input name="email" label="Email" type="email" />
                <Input
                  name="password"
                  label="Password"
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
                  <Link href="/register" underline="hover">
                    registration
                  </Link>
                  <Link href="/forgot-password" underline="hover">
                    forgot password
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
