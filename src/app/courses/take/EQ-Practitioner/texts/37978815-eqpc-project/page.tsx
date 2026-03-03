 "use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextLink from "next/link";
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Link,
  Divider,
  Button,
} from "@mui/material";

export default function EqpcProjectPage() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.paper" }}>
      <Navbar />

      {/* Header / breadcrumb */}
      <Box
        sx={{
          py: { xs: 3, md: 4 },
          borderBottom: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.default",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            sx={{ mb: 1, color: "text.secondary" }}
          >
            <Link component={NextLink} href="/enrollments" underline="hover">
              My Dashboard
            </Link>{" "}
            / EQ Practitioner Certification (EQPC) / Module 3
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
            }}
          >
            EQPC Project
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography sx={{ mb: 2, lineHeight: 1.7 }}>
              Your post-course project is an opportunity to synthesize and apply
              the learning. The nature of the project will depend on your goals
              in attending this course. Because we believe that &quot;no way is
              the way&quot; to apply your learning, we&apos;re very flexible in
              terms of what you can do to complete your certification.
            </Typography>

            {/* Recommended project callout */}
            <Box
              sx={{
                my: 3,
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box sx={{ backgroundColor: "#fac51c", p: 0.5 }} />
              <Box sx={{ p: { xs: 2, md: 3 }, backgroundColor: "white" }}>
                <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700 }}>
                  Recommended Project 📝
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                  The project is a simple process; it will take less than 6
                  hours.
                </Typography>
                <List dense sx={{ listStyle: "decimal", pl: 3 }}>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Identify at least 3 people with whom you want to share EQ." />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText
                      primary={
                        <>
                          Create a UEQ project in{" "}
                          <Link
                            href="https://newtools.6seconds.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            https://newtools.6seconds.org/
                          </Link>{" "}
                          (see the{" "}
                          <Link
                            href="https://6seconds.atlassian.net/wiki/spaces/TK2/pages/1592655873/How+to+set+up+a+UEQ+Project"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Knowledge Base
                          </Link>{" "}
                          for instructions), and send them the link.
                        </>
                      }
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="Have a dialogue with each person (instructions are in your PC workbook)." />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText
                      primary={
                        <>
                          Reflect on what you learned through that process.
                          <br />
                          How did you use your own EQ in the process?
                          <br />
                          What did your people say about the UEQp and your
                          conversation – what effect did this have?
                          <br />
                          How will this help you go forward?
                        </>
                      }
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText primary="On the next unit of this course, submit a brief reflection about what you learned." />
                  </ListItem>
                </List>
              </Box>
            </Box>

            <Typography variant="h5" sx={{ mt: 3, mb: 1.5, fontWeight: 700 }}>
              Alternate Projects 🧑‍🤝‍🧑
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
              Depending on your work and reasons for being in PC, you might
              wish to do a variation on this project such as sharing UEQ
              Profiles with colleagues or team, students, friends, etc. Or, you
              might want to customize your project a different way.
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
              For example, if you are a trainer or teacher, you might want to
              prepare a short workshop and use that for your project.
            </Typography>
            <Typography sx={{ mb: 3 }}>
              Or, if you&apos;re a manager, maybe you want to bring some or all
              of your team together to discuss the UEQs in a meeting about
              current goals.
            </Typography>
            <Typography sx={{ mb: 3 }}>
              Please keep it simple — the point of the project is to help you
              jump into action. 1, 2, 3, Pasta!
            </Typography>

            <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700 }}>
              Resources 🧰
            </Typography>
            <Typography sx={{ mb: 1 }}>
              If you want a handout or video or slides to frame the topic,
              there are many resources available to you here, for example:
            </Typography>
            <List dense sx={{ mb: 3 }}>
              <ListItem sx={{ display: "list-item", pl: 2 }}>
                <Link
                  href="https://files.cdn.thinkific.com/file_uploads/385428/attachments/ac4/604/55b/Plutchik-and-Naming-Emotions.pptx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Naming emotions workshop
                </Link>
              </ListItem>
              <ListItem sx={{ display: "list-item", pl: 2 }}>
                <Link
                  href="https://files.cdn.thinkific.com/file_uploads/385428/attachments/760/1cb/9e1/Story_of_The_Kite_by_Arnold_Lobel.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SEL Lessons – Story of The Kite
                </Link>{" "}
                and{" "}
                <Link
                  href="https://files.cdn.thinkific.com/file_uploads/385428/attachments/e93/390/733/Frogs_and_Toads_Talk.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frogs and Toads Talk
                </Link>
              </ListItem>
              <ListItem sx={{ display: "list-item", pl: 2 }}>
                <Link
                  href="https://files.cdn.thinkific.com/file_uploads/385428/attachments/ba5/3da/d6c/Reaction-Roadmap.ppt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reaction Roadmap Workshop
                </Link>{" "}
                /{" "}
                <Link
                  href="https://files.cdn.thinkific.com/file_uploads/385428/attachments/6ff/1d8/0b7/Reaction-Worksheet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reaction Cycle Worksheet
                </Link>
              </ListItem>
              <ListItem sx={{ display: "list-item", pl: 2 }}>
                <Link
                  href="https://files.cdn.thinkific.com/file_uploads/385428/attachments/d5f/208/ff7/Body-Mind-Heart-Scan-Lesson-Plan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SEL Lesson – The Body, Mind, Heart Scan
                </Link>
              </ListItem>
              <ListItem sx={{ display: "list-item", pl: 2 }}>
                <Link
                  href="https://files.cdn.thinkific.com/file_uploads/385428/attachments/f72/fbd/333/Intro-to-SEL.pptx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Intro to SEL Workshop
                </Link>
              </ListItem>
              <ListItem sx={{ display: "list-item", pl: 2 }}>
                <Link
                  href="https://files.cdn.thinkific.com/file_uploads/385428/attachments/99a/415/b14/biz-case-EQ-intro-3.pptx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Business Case Intro Workshop
                </Link>
              </ListItem>
              <ListItem sx={{ display: "list-item", pl: 2 }}>
                <Link
                  href="https://files.cdn.thinkific.com/file_uploads/385428/attachments/008/a32/862/people-first-fedex-EQ.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Case Study: EQ at FedEx
                </Link>{" "}
                and{" "}
                <Link
                  href="https://files.cdn.thinkific.com/file_uploads/385428/attachments/8c6/3eb/c07/FedEx_case_People_First_Leadership.pptx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  slides
                </Link>
              </ListItem>
            </List>

            {/* Embedded videos */}
            <Box sx={{ mb: 3 }}>
              <Box
                component="iframe"
                src="https://learn.6seconds.org/api/course_player/v2/contents/37978815/play/8052144"
                title="KidsPNG.mp4 - 02:57"
                sx={{
                  width: "100%",
                  minHeight: 220,
                  border: 0,
                  borderRadius: 2,
                  mb: 2,
                }}
                allowFullScreen
              />
              <Box
                component="iframe"
                src="https://learn.6seconds.org/api/course_player/v2/contents/37978815/play/8052192"
                title="Tom_Wujec_Build_Tower_Team.mp4 - 07:22"
                sx={{
                  width: "100%",
                  minHeight: 260,
                  border: 0,
                  borderRadius: 2,
                }}
                allowFullScreen
              />
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 700 }}>
              Reminder / Request ⚠️
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
              Be sure to maintain Six Seconds&apos; copyright.{" "}
              <Link
                href="https://6seconds.atlassian.net/wiki/spaces/TK2/pages/297178/Marketing+Communication+Outreach"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the Knowledge Base for more details
              </Link>
              .
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
              As you know from your Cert License, you&apos;ve agreed to
              maintain Six Seconds&apos; copyright information on all Six
              Seconds&apos; materials.
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
              The correct line to include:
            </Typography>
            <Typography
              sx={{
                mb: 1.5,
                pl: 2,
                borderLeft: "3px solid",
                borderColor: "divider",
                fontStyle: "italic",
              }}
            >
              Source: © Six Seconds (www.6seconds.org), Used by Permission
            </Typography>
            <Typography sx={{ mb: 3 }}>
              Please be sure to include this on any slides, handouts, or other
              materials you share.
            </Typography>

            <Typography variant="h4" sx={{ mb: 1.5, fontWeight: 800 }}>
              1, 2, 3, Pasta! ✅
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
              The biggest reason people give for not finishing their EQPC
              certification: lost momentum.
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
              This isn&apos;t a doctoral dissertation that should take vast
              energies. Jump in. Do an &quot;ok job&quot; and you&apos;ll learn
              a lot, then next time, you&apos;ll do a better job. That&apos;s
              the process.
            </Typography>
            <Typography sx={{ mb: 3, fontStyle: "italic" }}>
              Carpe diem!
            </Typography>

            <Box sx={{ textAlign: "right" }}>
              <Button
                component={NextLink}
                href="/courses/take/EQ-Practitioner/assignments/39950513-submit-your-eqpc-project"
                variant="contained"
                color="primary"
              >
                Complete &amp; continue
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

