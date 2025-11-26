import { useEffect, useRef } from "react";
import "./Projects.css";

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
          } else {
            entry.target.classList.remove("show");
            entry.target.classList.add("hidden");
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = sectionRef.current.querySelectorAll(".project-title, .project-card");
    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <h2 className="project-title hidden">My Projects</h2>

      <div className="project-grid">
        <div className="project-card hidden">
          <h3>Todo App</h3>
          <p>React + Node.js</p>
        </div>

        <div className="project-card hidden">
          <h3>Portfolio Website</h3>
          <p>React</p>
        </div>

        <div className="project-card hidden">
          <h3>E-Commerce Backend</h3>
          <p>Python + PostgreSQLite</p>
        </div>
      </div>
    </section>
  );
}
