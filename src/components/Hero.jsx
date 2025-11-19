import './Hero.css'
import resumeFile from './rezyume/rezyume.docx';


export default function Hero() {

  return (
    <section id="hero" className="hero">
      <h1>Hi, I'm <span>Asilbek</span></h1>
      <p>Full-Stack / Frontend / Backend Developer</p>
      <button onClick={() =>{
        const link = document.createElement('a');
        link.href = resumeFile
        link.download = "rezyume.docx";
        link.click();
      }} className="btn">Download CV</button>
    </section>
  );
}
