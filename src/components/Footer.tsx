"use client";

import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">Six Seconds</Link>
          <p className="footer-about">
            Six Seconds is a global nonprofit organization dedicated to the development and dissemination of emotional intelligence.
          </p>
          <div className="social-links">
            <a href="#" className="social-link"><FacebookIcon /></a>
            <a href="#" className="social-link"><TwitterIcon /></a>
            <a href="#" className="social-link"><LinkedInIcon /></a>
            <a href="#" className="social-link"><InstagramIcon /></a>
          </div>
        </div>
        <div className="footer-links-grid">
          <div className="footer-column">
            <h4 className="footer-column-title">Products</h4>
            <ul className="footer-links">
              <li><Link href="#" className="footer-link">Assessments</Link></li>
              <li><Link href="#" className="footer-link">Tools</Link></li>
              <li><Link href="#" className="footer-link">Certifications</Link></li>
              <li><Link href="#" className="footer-link">Books</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-links">
              <li><Link href="#" className="footer-link">About Us</Link></li>
              <li><Link href="#" className="footer-link">Careers</Link></li>
              <li><Link href="#" className="footer-link">Partners</Link></li>
              <li><Link href="#" className="footer-link">Press</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-column-title">Support</h4>
            <ul className="footer-links">
              <li><Link href="#" className="footer-link">Contact Us</Link></li>
              <li><Link href="#" className="footer-link">Help Center</Link></li>
              <li><Link href="#" className="footer-link">Privacy Policy</Link></li>
              <li><Link href="#" className="footer-link">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">© {new Date().getFullYear()} Six Seconds. All rights reserved.</p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: var(--primary);
          color: var(--white);
          padding: 5rem 0 2rem;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        .footer-brand {
          flex: 1;
          max-width: 400px;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -1px;
          color: var(--white);
          display: block;
          margin-bottom: 1.5rem;
        }
        .footer-about {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2rem;
        }
        .social-links {
          display: flex;
          gap: 1.5rem;
        }
        .social-link {
          color: var(--white);
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        .social-link:hover {
          opacity: 1;
        }
        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
        }
        .footer-column-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--white);
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-link {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: var(--white);
        }
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .copyright {
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.5);
          text-align: center;
        }
        @media (max-width: 1024px) {
          .footer-content {
            flex-direction: column;
            gap: 3rem;
          }
          .footer-brand {
            max-width: 100%;
          }
          .footer-links-grid {
            gap: 2rem;
          }
        }
        @media (max-width: 768px) {
          .footer-links-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
