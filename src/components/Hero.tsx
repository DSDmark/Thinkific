"use client";

import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid2 as Grid,
} from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  mb: 4,
                }}
              >
                <Box component="span" sx={{ display: "inline-block", mr: 1 }}>Wellbeing.</Box>
                <Box component="span" sx={{ display: "inline-block", mr: 1 }}>Quality of Life.</Box>
                <br />
                <Box component="span" sx={{ display: "inline-block", mr: 1 }}>Relationships.</Box>
                <Box component="span" sx={{ display: "inline-block" }}>Effectiveness.</Box>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 5,
                  color: "text.secondary",
                  lineHeight: 1.6,
                  maxWidth: 600,
                  fontSize: "1.25rem",
                  fontWeight: 400,
                }}
              >
                Emotional intelligence (EQ) helps you turn your intentions into actions.
                Our courses provide research-based tools to help you create positive change in yourself and the world.
              </Typography>
              <Button
                component={Link}
                href="/all-courses"
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1.125rem",
                  "&:hover": {
                    opacity: 0.9,
                  },
                }}
              >
                EXPLORE COURSES
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="People working together"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
