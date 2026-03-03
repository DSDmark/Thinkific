"use client";

import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

const CourseCard = ({ id, title, description, price, image }: CourseCardProps) => {
  return (
    <div className="course-card">
      <div className="course-image-container">
        <img 
          src={image} 
          alt={title} 
          className="course-image"
        />
      </div>
      <div className="course-info">
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>
        <div className="course-footer">
          <span className="course-price">{price}</span>
          <Link href={`/courses/${id}`} className="btn btn-outline course-btn">
            LEARN MORE
          </Link>
        </div>
      </div>
      <style jsx>{`
        .course-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .course-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }
        .course-image-container {
          position: relative;
          height: 200px;
        }
        .course-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .course-info {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .course-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .course-description {
          font-size: 0.9375rem;
          color: var(--text-light);
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }
        .course-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }
        .course-price {
          font-size: 1.125rem;
          font-weight: 800;
          color: var(--foreground);
        }
        .course-btn {
          font-size: 0.75rem;
          padding: 0.5rem 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05rem;
        }
      `}</style>
    </div>
  );
};

export default CourseCard;
