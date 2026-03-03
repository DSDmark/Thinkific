"use client";

import Link from "next/link";
import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "-1px",
                mb: 3,
                fontSize: "1.5rem",
              }}
            >
              Six Seconds
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 4,
                opacity: 0.8,
                maxWidth: 350,
                lineHeight: 1.6,
              }}
            >
              The world's largest EQ network, providing research-based tools to
              increase emotional intelligence.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton size="small" sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: "white" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: "white" }}>
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 2.5 }}>
            <Typography
              variant="h6"
              sx={{ mb: 3, fontWeight: 700, fontSize: "1.125rem" }}
            >
              Resources
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Link
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Assessments
              </Link>
              <Link
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Tools
              </Link>
              <Link
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Certifications
              </Link>
              <Link
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Books
              </Link>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 2.5 }}>
            <Typography
              variant="h6"
              sx={{ mb: 3, fontWeight: 700, fontSize: "1.125rem" }}
            >
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Link
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                About Us
              </Link>
              <Link
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Careers
              </Link>
              <Link
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Partners
              </Link>
              <Link
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Press
              </Link>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ mb: 3, fontWeight: 700, fontSize: "1.125rem" }}
            >
              Support
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Link
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Contact Us
              </Link>
              <Link
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Help Center
              </Link>
              <Link
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Terms of Service
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 4,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "rgba(255, 255, 255, 0.5)" }}
          >
            © {new Date().getFullYear()} Six Seconds. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
