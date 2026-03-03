"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextLink from "next/link";
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
  Card,
  CardContent,
  CardMedia,
  Button,
  LinearProgress,
  Stack,
} from "@mui/material";
import { useMemo, useState } from "react";

type EnrollmentStatus = "all" | "inprogress" | "completed" | "expired";

type Enrollment = {
  id: string;
  title: string;
  slug: string;
  overviewHref: string;
  resumeHref: string;
  image: string;
  progress: number;
  status: Exclude<EnrollmentStatus, "all">;
};

type Community = {
  id: string;
  name: string;
  posts: number;
  overviewHref: string;
  communityHref: string;
  image: string;
};

const ENROLLMENTS: Enrollment[] = [
  {
    id: "eqpopup",
    title: "POP-UP Festival - Official Host Onboarding (EQPOPUP)",
    slug: "eqpopup",
    overviewHref: "/courses/eqpopup",
    resumeHref:
      "/courses/take/eqpopup/texts/64635627-1-1-pop-up-festival-what-are-we-celebrating",
    image:
      "https://import.cdn.thinkific.com/385428/XIQD3Ya3SbeilUt1bAJS__boy-phillipeans.jpg",
    progress: 0,
    status: "inprogress",
  },
  {
    id: "eq-practitioner",
    title: "EQ Practitioner Certification (EQPC)",
    slug: "EQ-Practitioner",
    overviewHref: "/courses/EQ-Practitioner",
    resumeHref:
      "/courses/take/EQ-Practitioner/texts/37978815-eqpc-project",
    image:
      "https://import.cdn.thinkific.com/385428/courses/1984450/MCa2d3BrRm6Kf8VTWrft_PC%20event-50.jpg",
    progress: 0,
    status: "inprogress",
  },
  {
    id: "network-leader",
    title: "Network Leader Application & Foundations Course (NL)",
    slug: "network-leader",
    overviewHref: "/courses/network-leader",
    resumeHref:
      "/courses/take/network-leader/lessons/51420710-our-global-eq-community-what-are-we-working-for",
    image:
      "https://import.cdn.thinkific.com/385428/tJpXDqCQQPSqnojZqoW9_IMG_8103.png",
    progress: 0,
    status: "inprogress",
  },
  {
    id: "bpc-on-demand",
    title: "Brain Profiler On Demand Certification (BPC)",
    slug: "brain-profiler-on-demand-certification-bpc",
    overviewHref: "/courses/brain-profiler-on-demand-certification-bpc",
    resumeHref:
      "/courses/take/brain-profiler-on-demand-certification-bpc/multimedia/51095602-your-brain-profiler-workbook",
    image:
      "https://import.cdn.thinkific.com/385428/courses/2022465/NmeY90ufQaW6dTt0b5RR_pexels-yan-krukov-7698714.jpg",
    progress: 1,
    status: "inprogress",
  },
  {
    id: "ueq-unlocking-eq",
    title: "UEQ - Unlocking EQ",
    slug: "ueq-unlocking-eq-23",
    overviewHref: "/courses/ueq-unlocking-eq-23",
    resumeHref:
      "/courses/take/ueq-unlocking-eq-23/texts/39795032-ueq-welcome",
    image:
      "https://import.cdn.thinkific.com/385428/courses/2059673/bHzA8kZSSF6uxkSE3AD2_UEQ%20event-50.jpg",
    progress: 0,
    status: "inprogress",
  },
  {
    id: "my-brain-styles",
    title: "My Brain Styles",
    slug: "my-brain-styles",
    overviewHref: "/courses/my-brain-styles",
    resumeHref:
      "/courses/take/my-brain-styles/texts/40230788-welcome-to-my-brain-style",
    image:
      "https://import.cdn.thinkific.com/385428/courses/2077610/nF7UUkfGRVCFe7FnY5rP_brain-style-scales-with-brain-fade.png",
    progress: 0,
    status: "inprogress",
  },
];

const COMMUNITIES: Community[] = [
  {
    id: "six-seconds-network",
    name: "Six Seconds Network",
    posts: 289,
    overviewHref: "/products/communities/six-seconds-network",
    communityHref:
      "https://learn.6seconds.org/communities/Q29tbXVuaXR5LTIwMDcz",
    image:
      "https://import.cdn.thinkific.com/385428%2FOebtTgzTla0JFOONxEfL_LINKEDIN%20GROUPS%20%206S%20banner.png",
  },
  {
    id: "network-leaders",
    name: "Six Seconds Network Leaders",
    posts: 2,
    overviewHref: "/products/communities/network-leaders",
    communityHref:
      "https://learn.6seconds.org/communities/Q29tbXVuaXR5LTMzMzU3",
    image:
      "https://import.cdn.thinkific.com/385428/KXuta8qPRvGDcF3jrXum_CBD1043C-6784-491D-BED3-016FF9314603.jpeg",
  },
];

export default function EnrollmentsDashboard() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<EnrollmentStatus>("all");

  const filteredEnrollments = useMemo(() => {
    const query = search.trim().toLowerCase();

    return ENROLLMENTS.filter((enrollment) => {
      const matchesStatus =
        status === "all" || enrollment.status === status;

      const matchesQuery =
        !query ||
        enrollment.title.toLowerCase().includes(query) ||
        enrollment.slug.toLowerCase().includes(query);

      return matchesStatus && matchesQuery;
    });
  }, [search, status]);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.paper" }}>
      <Navbar />

      {/* Banner */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.75rem", md: "2.25rem" },
            }}
          >
            Your Student Dashboard
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1, color: "text.secondary" }}
          >
            View and resume your Emotional Intelligence Academy courses and
            communities.
          </Typography>
        </Container>
      </Box>

      {/* My courses */}
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                My courses
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
                alignItems: "center",
                gap: 2,
                mb: { xs: 1, md: 0 },
              }}
            >
              <Button
                component={NextLink}
                href="/collections"
                variant="text"
                sx={{ fontWeight: 600 }}
              >
                View more courses
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            alignItems="center"
            sx={{ mt: 1, mb: 3 }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <FormControl fullWidth>
                <InputLabel id="status-filter-label">
                  Enrollment status
                </InputLabel>
                <Select
                  labelId="status-filter-label"
                  label="Enrollment status"
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value as EnrollmentStatus)
                  }
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="inprogress">In Progress</MenuItem>
                  <MenuItem value="completed">Completed</MenuItem>
                  <MenuItem value="expired">Expired</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            {filteredEnrollments.map((course) => (
              <Grid
                key={course.id}
                size={{ xs: 12, md: 6, lg: 4 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      image={course.image}
                      alt={course.title}
                      sx={{ height: 180, objectFit: "cover" }}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      p: 2.5,
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        minHeight: "3rem",
                      }}
                    >
                      {course.title}
                    </Typography>

                    <Box sx={{ mt: 1, mb: 1.5 }}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ mb: 0.5 }}
                      >
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary" }}
                        >
                          Your progress
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ fontWeight: 600 }}
                        >
                          {course.progress}%
                        </Typography>
                      </Stack>
                      <LinearProgress
                        variant="determinate"
                        value={course.progress}
                        sx={{
                          height: 6,
                          borderRadius: 999,
                        }}
                      />
                    </Box>

                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ mt: "auto" }}
                    >
                      <Button
                        component={NextLink}
                        href="/courses/brain-profile-certification-bpc-2-0-EU"
                        variant="text"
                        size="small"
                      >
                        See Overview
                      </Button>
                      <Button
                        component={NextLink}
                        href={course.resumeHref}
                        variant="outlined"
                        size="small"
                      >
                        {course.progress > 0
                          ? "Resume Course"
                          : "Start Course"}
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {filteredEnrollments.length === 0 && (
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                No courses found
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Try adjusting your search or status filter.
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      {/* My communities */}
      <Box sx={{ pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, mb: 3 }}
          >
            My communities
          </Typography>

          <Grid container spacing={3}>
            {COMMUNITIES.map((community) => (
              <Grid
                key={community.id}
                size={{ xs: 12, md: 6 }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={community.image}
                    alt={community.name}
                    sx={{ height: 180, objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, mb: 0.5 }}
                    >
                      {community.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      {community.posts} posts
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Button
                        component={NextLink}
                        href={community.overviewHref}
                        variant="text"
                        size="small"
                      >
                        See Overview
                      </Button>
                      <Button
                        component="a"
                        href={community.communityHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="small"
                      >
                        Open Community
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

