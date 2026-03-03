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

type Errors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  terms?: string;
};

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Errors = {};
    if (!firstName.trim()) {
      nextErrors.firstName = "This field cannot be blank";
    }
    if (!lastName.trim()) {
      nextErrors.lastName = "This field cannot be blank";
    }
    if (!email.trim()) {
      nextErrors.email = "Please enter a valid email address";
    }
    if (!password.trim()) {
      nextErrors.password = "This field cannot be blank";
    }
    if (!acceptTerms) {
      nextErrors.terms = "Please check this box if you wish to proceed";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      // Stub for actual sign up integration
      // eslint-disable-next-line no-console
      console.log("Sign up", {
        firstName,
        lastName,
        email,
        acceptTerms,
      });
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
            Create a new account
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 4, color: "text.secondary" }}
          >
            Join Emotional Intelligence Academy to access courses, certifications
            and community resources.
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
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                >
                  <TextField
                    label="First name"
                    fullWidth
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName}
                  />
                  <TextField
                    label="Last name"
                    fullWidth
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName}
                  />
                </Stack>

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

                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        I have read and agree to the{" "}
                        <Link
                          component={NextLink}
                          href="https://learn.6seconds.org/pages/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                          underline="hover"
                        >
                          Terms of Use
                        </Link>
                        .
                      </Typography>
                    }
                  />
                  {errors.terms && (
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{ display: "block", mt: 0.5 }}
                    >
                      {errors.terms}
                    </Typography>
                  )}
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ mt: 1, py: 1.4, fontWeight: 700 }}
                >
                  Sign up
                </Button>

                <Box sx={{ textAlign: "center", mt: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 1 }}
                  >
                    Or sign up with
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
                    Already have an account?{" "}
                    <Link
                      component={NextLink}
                      href="/users/sign_in"
                      underline="hover"
                    >
                      Sign in
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

