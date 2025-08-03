import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      })
      .catch(() => {
        toast.error("Failed to send message. Try again later.");
      });
  };

  return (
    <section id="contact" className="min-h-screen py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Contact <span className="text-primary">Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-card border border-border rounded-xl p-6 shadow-md"
        >
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="What's on your mind?"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition w-full font-semibold text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
