"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
        height: 70,
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box component={Link} href="/" sx={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
              color: "primary.main",
                textTransform: "uppercase",
                letterSpacing: "-1px",
                fontSize: "1.5rem",
              }}
            >
              Six Seconds
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Button
              component={Link}
              href="/collections"
              sx={{
                color:
                  pathname === "/collections" ? "primary.main" : "text.primary",
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: "0.05rem",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "primary.main",
                },
              }}
            >
              ALL COURSES
            </Button>
            <Button
              component={Link}
              href="/enrollments"
              sx={{
                color:
                  pathname === "/enrollments" ? "primary.main" : "text.primary",
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: "0.05rem",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "primary.main",
                },
              }}
            >
              My Dashboard
            </Button>
            <Button
              component={Link}
              href="/users/sign_in"
              startIcon={<AccountCircleOutlinedIcon />}
              sx={{
                color: "text.primary",
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: "0.05rem",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "primary.main",
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
