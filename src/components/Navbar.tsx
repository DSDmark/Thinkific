"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="nav-wrapper">
      <div className="container nav-content">
        <div className="logo-container">
          <Link href="/" className="logo-link">
            <span className="logo-text">Six Seconds</span>
          </Link>
        </div>
        <div className="nav-links">
          <Link
            href="/all-courses"
            className={`nav-link ${pathname === "/all-courses" ? "active" : ""}`}
          >
            ALL COURSES
          </Link>
          <Link
            href="/sign-in"
            className="nav-link sign-in-link"
          >
            <AccountCircleOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
            Sign In
          </Link>
        </div>
      </div>
      <style jsx>{`
        .nav-wrapper {
          position: sticky;
          top: 0;
          background: var(--white);
          border-bottom: 1px solid var(--border);
          z-index: 1000;
          height: 70px;
          display: flex;
          align-items: center;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: -1px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-link {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--foreground);
          letter-spacing: 0.05rem;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        .sign-in-link {
          display: flex;
          align-items: center;
        }
        @media (max-width: 768px) {
          .nav-links {
            gap: 1rem;
          }
          .nav-link {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
