"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-part">Wellbeing.</span>{" "}
            <span className="title-part">Quality of Life.</span>{" "}
            <br />
            <span className="title-part">Relationships.</span>{" "}
            <span className="title-part">Effectiveness.</span>
          </h1>
          <p className="hero-subtitle">
            Emotional intelligence (EQ) helps you turn your intentions into actions.
            Our courses provide research-based tools to help you create positive change in yourself and the world.
          </p>
          <div className="hero-actions">
            <Link href="/all-courses" className="btn btn-primary hero-btn">
              EXPLORE COURSES
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="People working together" 
            className="hero-image"
          />
        </div>
      </div>
      <style jsx>{`
        .hero-section {
          background-color: #f9fbfd;
          padding: 6rem 0;
          overflow: hidden;
        }
        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
        }
        .hero-text {
          flex: 1;
        }
        .hero-title {
          font-size: 3.5rem;
          line-height: 1.1;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 2rem;
        }
        .title-part {
          display: inline-block;
          margin-right: 0.5rem;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--text-light);
          margin-bottom: 2.5rem;
          max-width: 600px;
        }
        .hero-btn {
          font-size: 1.125rem;
          padding: 1rem 2rem;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
        }
        .hero-image-container {
          flex: 1;
          position: relative;
        }
        .hero-image {
          width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        @media (max-width: 1024px) {
          .hero-content {
            flex-direction: column;
            text-align: center;
          }
          .hero-title {
            font-size: 2.75rem;
          }
          .hero-subtitle {
            margin: 0 auto 2.5rem;
          }
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
