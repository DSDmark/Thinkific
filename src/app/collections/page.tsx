 "use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import NextLink from "next/link";
import { PRODUCTS, getProductHref, type PriceFilter } from "@/data/products";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Stack,
} from "@mui/material";

export default function CollectionsPage() {
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      const matchesPrice =
        priceFilter === "all" || product.priceType === priceFilter;

      const matchesQuery =
        !query ||
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesPrice && matchesQuery;
    });
  }, [search, priceFilter]);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.paper" }}>
      <Navbar />

      {/* Hero / Header */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          borderBottom: "1px solid",
          borderColor: "divider",
          background:
            "linear-gradient(135deg, #f3f7ff 0%, #ffffff 40%, #fdf5ff 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 2,
              fontWeight: 700,
              color: "secondary.main",
              mb: 1,
              display: "block",
            }}
          >
            Emotional Intelligence Academy
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 800,
              mb: 2,
            }}
          >
            All Products
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 640,
              lineHeight: 1.7,
            }}
          >
            Browse all courses and certifications from Six Seconds, The
            Emotional Intelligence Network. Filter to quickly find the right
            learning experience for you or your organization.
          </Typography>
        </Container>
      </Box>

      {/* Filters */}
      <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Search courses and certifications"
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <FormControl fullWidth>
                <InputLabel id="price-filter-label">Price</InputLabel>
                <Select
                  labelId="price-filter-label"
                  label="Price"
                  value={priceFilter}
                  onChange={(e) =>
                    setPriceFilter(e.target.value as PriceFilter)
                  }
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="free">Free</MenuItem>
                  <MenuItem value="paid">Paid</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Stack
                direction="row"
                spacing={1}
                sx={{ flexWrap: "wrap", rowGap: 1 }}
              >
                {search && (
                  <Chip
                    label={`Search: "${search}"`}
                    onDelete={() => setSearch("")}
                    color="primary"
                    variant="outlined"
                    size="small"
                  />
                )}
                {priceFilter !== "all" && (
                  <Chip
                    label={
                      priceFilter === "free"
                        ? "Filter: Free"
                        : "Filter: Paid"
                    }
                    onDelete={() => setPriceFilter("all")}
                    color="secondary"
                    variant="outlined"
                    size="small"
                  />
                )}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Products grid */}
      <Box sx={{ pb: 8 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
              Showing {filteredProducts.length} of {PRODUCTS.length} products
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {filteredProducts.map((product) => (
              <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  sx={{ position: "relative" }}
                  component={NextLink}
                  href={getProductHref(product)}
                  style={{ textDecoration: "none" }}
                >
                  <CourseCard
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                  />
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                    }}
                  >
                    {product.tags.slice(0, 2).map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: "rgba(255,255,255,0.9)",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                        }}
                      />
                    ))}
                    {product.priceType === "free" && (
                      <Chip
                        label="FREE"
                        size="small"
                        color="secondary"
                        sx={{ fontWeight: 800 }}
                      />
                    )}
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>

          {filteredProducts.length === 0 && (
            <Box sx={{ textAlign: "center", mt: 8 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                No products match your filters
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Try clearing your search or selecting a different price filter.
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

