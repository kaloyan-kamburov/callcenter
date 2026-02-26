import { Card, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "@/components/form/Input/Input";
import { isValidEmail } from "@/utils/validations/email";
import { Link } from "@mui/material";
import { useForgotPasswordMutation } from "@/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

export default function ForgotPasswordPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [forgotPassword] = useForgotPasswordMutation();
  const validationSchema = Yup.object({
    email: Yup.string()
      .required(t("common.validation.required"))
      .test(
        "valid-email",
        t("common.validation.invalidEmail"),
        (value) => isValidEmail(value ?? ""),
      ),
  });

  return (
    <Box sx={{ display: "grid", placeItems: "center", minHeight: "100%" }}>
      <Card variant="outlined" sx={{ p: 4, width: 400 }}>
        <Typography variant="h6" component="h1" gutterBottom align="center">
          {t("forgotPassword.title")}
        </Typography>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await forgotPassword(values).unwrap();
              toast.success(t("forgotPassword.emailSent"));
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
                  name="email"
                  label={t("forgotPassword.emailLabel")}
                  type="email"
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  {t("forgotPassword.submit")}
                </Button>
                <Box display="flex" justifyContent="space-between">
                  <Link href="/login" underline="hover">
                    {t("forgotPassword.backToLogin")}
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
