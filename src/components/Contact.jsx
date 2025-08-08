import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.loading("Sending...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setSubmitted(true);
      })
      .catch(() => {
        toast.error("Failed to send message. Try again later.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-background text-foreground"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Contact <span className="text-primary">Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-8 bg-card border border-border rounded-xl p-6 shadow-md">
          {/* Left column: Contact info */}
          <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
            {/* Name */}
            <div>
              <h3 className="text-3xl font-extrabold text-primary tracking-wide">
                Rinkesh Thakur
              </h3>
              <p className="text-muted-foreground mt-1">
                Full Stack Developer • Creative Coder
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <span className="p-3 bg-primary/10 text-primary rounded-full">
                📞
              </span>
              <p className="text-lg font-medium hover:text-primary transition-colors">
                +91 9767065622
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <span className="p-3 bg-pink-500/10 text-pink-500 rounded-full">
                📧
              </span>
              <p className="text-lg font-medium hover:text-pink-500 transition-colors">
                rinkeshthakur1997@gmail.com
              </p>
            </div>

  {/* Short message */}
  <p className="text-muted-foreground leading-relaxed">
    Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
  </p>
</div>


          {/* Right column: Form */}
          <div>
            {submitted ? (
              <div className="text-center py-10">
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  I’ve received your message and will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-pink-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition w-full font-semibold text-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
