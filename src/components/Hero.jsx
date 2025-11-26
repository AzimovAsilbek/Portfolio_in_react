import { useEffect, useState } from 'react';
import './Hero.css';
import resumeFile from './rezyume/rezyume.docx';

export default function Hero() {
  const h1Text = "Hi, I'm ";
  const name = "Asilbek";
  const fullText = "Full-Stack / Frontend Developer & Backend Developer";

  const [h1Line, setH1Line] = useState("");
  const [textLine, setTextLine] = useState("");
  const [h1Index, setH1Index] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  // Title typing
  useEffect(() => {
    if (h1Index < h1Text.length + name.length) {
      const timeout = setTimeout(() => {
        if (h1Index < h1Text.length) {
          setH1Line(h1Text.slice(0, h1Index + 1));
        } else {
          setH1Line(h1Text + name.slice(0, h1Index - h1Text.length + 1));
        }
        setH1Index(h1Index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [h1Index]);

  // Paragraph typing
  useEffect(() => {
    if (h1Index === h1Text.length + name.length && textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTextLine(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [textIndex, h1Index]);

  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          {h1Line.slice(0, h1Text.length)}
          <span className="highlight">{h1Line.slice(h1Text.length)}</span>
        </h1>

        <p className="hero-subtitle">{textLine}</p>

        <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = resumeFile;
            link.download = "rezyume.docx";
            link.click();
          }}
          className="hero-btn"
        >
          Download CV
        </button>
      </div>
    </section>
  );
}
