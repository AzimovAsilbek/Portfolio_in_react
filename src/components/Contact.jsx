import "./Contact.css"

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact Me</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Message" required></textarea>
        <button className="contact-btn">Send Message</button>
      </form>
    </section>
  );
}
