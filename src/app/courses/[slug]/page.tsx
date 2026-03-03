 "use client";

import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextLink from "next/link";
import { getProductBySlug } from "@/data/products";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const DEFAULT_MODULES = [
  "Introduction",
  "Core concepts and tools",
  "Practice and application",
  "Resources",
  "Next steps",
];

export default function CourseBySlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.paper" }}>
      <Navbar />

      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background:
            "linear-gradient(135deg, #f3f7ff 0%, #ffffff 40%, #fdf5ff 100%)",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
                {product.tags.slice(0, 3).map((tag) => (
                  <Chip key={tag} label={tag} size="small" />
                ))}
                {product.priceType === "free" && (
                  <Chip
                    label="FREE"
                    color="secondary"
                    size="small"
                    sx={{ fontWeight: 800 }}
                  />
                )}
              </Stack>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.6rem" },
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                {product.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.7, mb: 3 }}
              >
                {product.description}
              </Typography>

              <Typography
                variant="h5"
                sx={{ fontWeight: 800, mb: 2, color: "primary.main" }}
              >
                {product.price}
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={NextLink}
                  href="/enrollments"
                  sx={{ px: 4, py: 1.4, fontWeight: 700 }}
                >
                  Enroll today
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  component={NextLink}
                  href="/collections"
                  sx={{ px: 4, py: 1.4 }}
                >
                  Back to all products
                </Button>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "background.default",
                }}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={product.title}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    mb: 2,
                  }}
                />
                <Divider sx={{ my: 2 }} />
                <Typography
                  variant="subtitle2"
                  sx={{ textTransform: "uppercase", mb: 1, color: "text.secondary" }}
                >
                  About this course
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  This page is a Next.js + MUI equivalent of the Thinkific course
                  overview. You can extend the curriculum modules and lesson
                  content as needed.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                Course content
              </Typography>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  overflow: "hidden",
                }}
              >
                <List disablePadding>
                  {DEFAULT_MODULES.map((title, index) => (
                    <Box key={title}>
                      <ListItem>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              {title}
                            </Typography>
                          }
                        />
                      </ListItem>
                      {index < DEFAULT_MODULES.length - 1 && (
                        <Divider component="li" />
                      )}
                    </Box>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Continue learning
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Explore more courses in{" "}
                <Box component="span" sx={{ fontWeight: 700 }}>
                  Collections
                </Box>{" "}
                or return to your{" "}
                <Box component="span" sx={{ fontWeight: 700 }}>
                  Dashboard
                </Box>
                .
              </Typography>
              <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
                <Button component={NextLink} href="/collections" variant="text">
                  Collections
                </Button>
                <Button component={NextLink} href="/enrollments" variant="text">
                  Dashboard
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

