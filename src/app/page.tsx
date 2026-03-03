import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import DifferenceSection from "@/components/DifferenceSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const featuredCourses = [
    {
      id: "work-with-emotions",
      title: "3 Steps to Work WITH Your Emotions (Instead of Against)",
      description: "Learn a powerful, 3-step process to navigate your emotions and turn them into allies for better decision-making and relationships.",
      price: "$75.99",
      image: "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: "coaching-through-challenge",
      title: "Coaching Through Challenge",
      description: "Equip yourself with the EQ tools to support others through difficult times. Ideal for coaches, managers, and educators.",
      price: "$145.95",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: "managing-wellbeing",
      title: "Managing Wellbeing",
      description: "Based on the US Surgeon General's framework, this course helps managers build a culture of wellbeing and mental health in the workplace.",
      price: "$295.00",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div className="home-page">
      <Navbar />
      <Hero />

      <ClientsSection />

      <section className="section featured-courses-section">
        <div className="container">
          <h2 className="section-title text-center">Featured Courses</h2>
          <div className="courses-grid">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          <div className="view-all-container">
            <a href="/all-courses" className="btn btn-outline view-all-btn">
              VIEW ALL COURSES
            </a>
          </div>
        </div>
      </section>

      <DifferenceSection />

      <section className="section newsletter-section">
        <div className="container newsletter-content">
          <div className="newsletter-text">
            <h2 className="title-medium">Join the EQ community</h2>
            <p>Get the latest research and tools for emotional intelligence delivered to your inbox.</p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" className="newsletter-input" required />
            <button type="submit" className="btn btn-primary newsletter-btn">SUBSCRIBE</button>
          </form>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .home-page {
          min-height: 100vh;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 3.5rem;
        }
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-bottom: 4rem;
        }
        .view-all-container {
          text-align: center;
        }
        .view-all-btn {
          font-size: 1rem;
          padding: 0.875rem 2rem;
          letter-spacing: 0.05rem;
        }
        .newsletter-section {
          background-color: var(--primary);
          color: var(--white);
          padding: 5rem 0;
        }
        .newsletter-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
        }
        .newsletter-text {
          flex: 1;
        }
        .newsletter-text p {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 0.5rem;
        }
        .newsletter-form {
          flex: 1;
          display: flex;
          gap: 1rem;
          max-width: 500px;
        }
        .newsletter-input {
          flex: 1;
          padding: 1rem 1.5rem;
          border-radius: 4px;
          border: none;
          font-size: 1rem;
        }
        .newsletter-btn {
          padding: 1rem 2rem;
          white-space: nowrap;
          background-color: var(--secondary);
          color: var(--white);
        }
        @media (max-width: 1024px) {
          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .newsletter-content {
            flex-direction: column;
            text-align: center;
          }
          .newsletter-form {
            width: 100%;
          }
        }
        @media (max-width: 768px) {
          .courses-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto 3rem;
          }
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
