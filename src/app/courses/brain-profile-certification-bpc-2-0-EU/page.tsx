 "use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextLink from "next/link";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  Stack,
  Link,
} from "@mui/material";

const SECTIONS = [
  "Introduction to the Brain Profiler Certification",
  "Module 1 - The Six Seconds EQ Model & Learning Philosophy",
  "Module 2 - Using the SEI and the SEI Tools System",
  "Module 3 - The Brain Profile",
  "Module 4 - The Dashboard",
  "Module 5 - Profiles & Talents Applications",
  "Module 6 - Conclusions",
];

export default function BrainProfileCoursePage() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.paper" }}>
      <Navbar />

      {/* Hero section */}
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
              <Chip
                label="Certification"
                color="secondary"
                size="small"
                sx={{ mb: 2, fontWeight: 700 }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.6rem" },
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                Brain Profile Certification BPC 2.0 EU
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                Distill the value of emotional intelligence into every training.
                Get certified as a Brain Profiler (BPC) and equip yourself with
                four practical, powerful tools to develop insight and
                performance.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 2, flexWrap: "wrap" }}>
                <Chip label="Professional" size="small" />
                <Chip label="EQ Assessment" size="small" />
                <Chip label="Certification" size="small" />
              </Stack>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, mb: 2, color: "primary.main" }}
              >
                $595.00
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
                <Typography
                  variant="subtitle2"
                  sx={{ textTransform: "uppercase", mb: 1, color: "text.secondary" }}
                >
                  Course summary
                </Typography>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                  About this course
                </Typography>
                <Stack spacing={1.5} sx={{ mb: 2 }}>
                  <Typography variant="body2">
                    • 0 hours of video content
                  </Typography>
                  <Typography variant="body2">• 34 lessons</Typography>
                  <Typography variant="body2">• Online certification</Typography>
                </Stack>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                  If you&apos;re interested in this course, check out upcoming
                  courses in your region:
                </Typography>
                <Link
                  href="https://www.6seconds.org/events"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ fontWeight: 600 }}
                >
                  View upcoming events
                </Link>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Curriculum overview */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant="h5"
                sx={{ mb: 2, fontWeight: 700 }}
              >
                Course content
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 3 }}
              >
                Explore the key modules you&apos;ll complete as part of the Brain
                Profile Certification BPC 2.0 EU.
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
                  {SECTIONS.map((title, index) => (
                    <Box key={title}>
                      <ListItem sx={{ alignItems: "flex-start" }}>
                        <ListItemText
                          primary={
                            <Typography
                              variant="subtitle1"
                              sx={{ fontWeight: 600 }}
                            >
                              {title}
                            </Typography>
                          }
                          secondary={
                            <Typography
                              variant="body2"
                              sx={{ color: "text.secondary", mt: 0.5 }}
                            >
                              High-level overview of the lessons and
                              activities you&apos;ll complete in this module
                              as you work toward Brain Profile Certification.
                            </Typography>
                          }
                        />
                      </ListItem>
                      {index < SECTIONS.length - 1 && <Divider component="li" />}
                    </Box>
                  ))}
                </List>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 700 }}
              >
                Who is this for?
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
                This certification is designed for learning and development
                professionals, coaches, consultants, and educators who want to
                integrate Six Seconds&apos; Brain Profiles into their work.
              </Typography>

              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 700 }}
              >
                What you&apos;ll gain
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                • Deep understanding of the Six Seconds EQ Model. <br />
                • Confidence administering and debriefing Brain Profiles. <br />
                • Practical tools to bring emotional intelligence into your
                trainings, coaching, and organizational development work.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

