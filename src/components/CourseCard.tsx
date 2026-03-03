"use client";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const CourseCard = ({ title, description, price, image }: CourseCardProps) => {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        },
        border: "1px solid",
        borderColor: "divider",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 700,
            lineHeight: 1.3,
            mb: 2,
            minHeight: "3.2rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            color: "primary.main",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mb: 3,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            fontSize: "0.9375rem",
          }}
        >
          {description}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            color: "text.primary",
            fontSize: "1.125rem",
          }}
        >
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
