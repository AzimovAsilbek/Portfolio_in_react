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
        <a style={{
          color: "white",
          textDecoration: "none",
          borderRadius: "5px"
        }} href="https://todo-app-knew.vercel.app/">

          <div className="project-card hidden">
            <h3><a style={{
              color: "white",
              textDecoration: "none",
              borderRadius: "5px"
            }} href="https://todo-app-knew.vercel.app/">Todo app</a></h3>
            <p>React</p>
          </div>
        </a>
        
         <a style={{
          color: "white",
          textDecoration: "none",
          borderRadius: "5px"
        }} href="https://website-in-javascirp.vercel.app/">
        <div className="project-card hidden">
          <h3>Website</h3>
          <p>Javascript</p>
        </div>
        </a>

        <div className="project-card hidden">
          {/* <h3>E-Commerce Backend</h3> */}
          <h3>Telegram Bot</h3>
          <p>Python + SQLite</p>
        </div>
      </div>
    </section>
  );
}
