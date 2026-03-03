"use client";

import PublicIcon from "@mui/icons-material/Public";
import ScienceIcon from "@mui/icons-material/Science";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const DifferenceSection = () => {
  return (
    <section className="difference-section">
      <div className="container">
        <h2 className="section-title text-center">The Six Seconds Difference</h2>
        <div className="pillars-grid">
          <div className="pillar">
            <div className="pillar-icon-container">
              <AutoAwesomeIcon sx={{ fontSize: 40, color: "var(--primary)" }} />
            </div>
            <h3 className="pillar-title">Transformational</h3>
            <p className="pillar-text">
              We provide tools and programs that create deep, lasting change in how people lead and live.
            </p>
          </div>
          <div className="pillar">
            <div className="pillar-icon-container">
              <PublicIcon sx={{ fontSize: 40, color: "var(--primary)" }} />
            </div>
            <h3 className="pillar-title">Global</h3>
            <p className="pillar-text">
              With 25 offices around the world and certified professionals in over 150 countries, we are a truly global community.
            </p>
          </div>
          <div className="pillar">
            <div className="pillar-icon-container">
              <ScienceIcon sx={{ fontSize: 40, color: "var(--primary)" }} />
            </div>
            <h3 className="pillar-title">Scientific</h3>
            <p className="pillar-text">
              Our methods are grounded in research and validated by dozens of peer-reviewed studies.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .difference-section {
          padding: 6rem 0;
          background-color: var(--white);
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 4rem;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }
        .pillar {
          text-align: center;
          padding: 2.5rem;
          background-color: #f9fbfd;
          border-radius: 16px;
          border: 1px solid var(--border);
          transition: transform 0.3s ease;
        }
        .pillar:hover {
          transform: translateY(-5px);
        }
        .pillar-icon-container {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background-color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
        .pillar-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--primary);
        }
        .pillar-text {
          font-size: 1rem;
          color: var(--text-light);
          line-height: 1.6;
        }
        @media (max-width: 992px) {
          .pillars-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
          }
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default DifferenceSection;
