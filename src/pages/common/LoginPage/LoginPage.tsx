import { Card, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "@/components/form/Input/Input";
import { useLoginMutation } from "@/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/common/LanguageSwitcher/LanguageSwitcher";

export default function LoginPage() {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const { t } = useTranslation();

  return (
    <Box sx={{ display: "grid", placeItems: "center", minHeight: "100%" }}>
      <Card variant="outlined" sx={{ p: 4, width: 400 }}>
        <Box display="flex" justifyContent="flex-end">
          <LanguageSwitcher />
        </Box>
        <Typography variant="h6" component="h1" gutterBottom align="center">
          {t("login.title")}{" "}
        </Typography>

        <Formik
          initialValues={{ username: "username", password: "password" }}
          validationSchema={Yup.object({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await login({
                username: values.username,
                password: values.password,
              }).unwrap();
              if (response?.accessToken) {
                localStorage.setItem("authToken", response.accessToken);
              }
              localStorage.setItem(
                "authUser",
                JSON.stringify({
                  id: response.userId,
                  role: response.role,
                }),
              );
              navigate("/");
            } catch (err: unknown) {
              if (axios.isAxiosError(err)) {
                const status = err.response?.status;
                if (status === 401) {
                  toast.error(t("login.invalidCredentials"));
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
                toast.error(message);
                return;
              }
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form noValidate>
              <Box display="grid" gap={2}>
                <Input
                  name="username"
                  label={t("login.username")}
                  type="text"
                />
                <Input
                  name="password"
                  label={t("login.password")}
                  type="password"
                  showPasswordToggle
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                >
                  {t("login.submit")}
                </Button>
                <Box display="flex" justifyContent="flex-end">
                  {/* <Link href="/register" underline="hover">
                    {t("login.registration")}
                  </Link> */}
                  <Link href="/forgot-password" underline="hover">
                    {t("login.forgotPassword")}
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
