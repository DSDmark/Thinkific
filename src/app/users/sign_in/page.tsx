 "use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextLink from "next/link";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
  Stack,
} from "@mui/material";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: { email?: string; password?: string } = {};
    if (!email.trim()) {
      nextErrors.email = "Please enter a valid email address";
    }
    if (!password.trim()) {
      nextErrors.password = "This field cannot be blank";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      // Stub for actual auth integration
      // eslint-disable-next-line no-console
      console.log("Sign in", { email, password, rememberMe });
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.paper" }}>
      <Navbar />

      <Box
        sx={{
          py: 8,
          background:
            "linear-gradient(135deg, #f3f7ff 0%, #ffffff 40%, #fdf5ff 100%)",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 1, fontWeight: 800, fontSize: "2rem" }}
          >
            Welcome!
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 4, color: "text.secondary" }}
          >
            Sign in to Emotional Intelligence Academy to access your courses and
            certifications.
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.default",
            }}
          >
            <form onSubmit={handleSubmit} noValidate>
              <Stack spacing={3}>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                    }
                    label="Remember me"
                  />
                  <Link
                    component={NextLink}
                    href="#"
                    underline="hover"
                    sx={{ fontSize: "0.875rem" }}
                  >
                    Forgot password?
                  </Link>
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ mt: 1, py: 1.4, fontWeight: 700 }}
                >
                  Sign in
                </Button>

                <Box sx={{ textAlign: "center", mt: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 1 }}
                  >
                    Or sign in with
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1.5}
                    justifyContent="center"
                  >
                    <Button variant="outlined" size="small">
                      Google
                    </Button>
                    <Button variant="outlined" size="small">
                      LinkedIn
                    </Button>
                  </Stack>
                </Box>

                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Don&apos;t have an account?{" "}
                    <Link
                      component={NextLink}
                      href="/users/sign_up"
                      underline="hover"
                    >
                      Sign up
                    </Link>
                  </Typography>
                </Box>
              </Stack>
            </form>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

