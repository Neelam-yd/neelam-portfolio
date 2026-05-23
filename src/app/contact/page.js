"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  const contactLinks = [
    {
      label: "Email",
      value: "neelam222004@gmail.com",
      href: "mailto:neelam222004@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 7L2 7" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "Neelam.linkedIn",
      href: "https://www.linkedin.com/in/neelam-yadav-322245257/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "Neelam-yd.github",
      href: "https://github.com/Neelam-yd",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      value: "+91 7678202458",
      href: "https://wa.me/917678202458",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.975-1.418A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 0 1-4.049-1.107l-.29-.172-2.952.841.857-2.877-.19-.295A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0ece6] font-sans px-6 py-20 max-w-9xl">

      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-none tracking-tight">
          Let&apos;s <span className="text-[#e8650a]">Work Together</span>
        </h1>
        <p className="mt-5 text-[#888] text-base leading-relaxed max-w-3xl mx-auto">
          Have a project in mind or just want to say hi? My inbox is always
          open —<br /> I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-15 items-start mx-20">

        {/* Left: contact cards + availability */}
        <div className="flex flex-col gap-4">
         {contactLinks.map((c) => (
  <a
    key={c.label}
    href={c.href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 bg-[#131313] border border-[#2a2a2a] rounded-2xl px-5 py-4 no-underline text-[#f0ece6] transition-all duration-200 hover:border-[#e8650a] hover:bg-[#1a1a1a] hover:translate-x-1 group"
  >
    <div className="w-11 h-11 rounded-xl bg-[rgba(232,101,10,0.12)] flex items-center justify-center text-[#e8650a] flex-shrink-0 transition-colors duration-200 group-hover:bg-[rgba(232,101,10,0.22)]">
      {c.icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-[11px] tracking-[0.12em] uppercase text-[#888] font-medium mb-0.5">
        {c.label}
      </p>
      <p className="text-sm font-medium truncate text-[#f0ece6]">
        {c.value}
      </p>
    </div>
    <svg
      className="text-[#555] flex-shrink-0 transition-all duration-200 group-hover:text-[#e8650a] group-hover:translate-x-1"
      width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </a>
))}

          {/* Availability badge */}
          <div className="flex items-center gap-3 bg-[#131313] border border-[#2a2a2a] rounded-2xl px-5 py-4">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 flex-shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
            <p className="text-sm text-[#888]">
              <strong className="text-[#f0ece6] font-medium">Available for freelance</strong>{" "}
              — open to new projects and full-time roles.
            </p>
          </div>
        </div>

        {/* Right: form card */}
        <div className="bg-[#131313] border border-[#2a2a2a] rounded-2xl p-8">
          {status === "sent" ? (
            <div className="flex flex-col items-center text-center py-10 gap-4">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Message Sent!</h3>
              <p className="text-[#888] text-sm">Thanks for reaching out. I&apos;ll reply within 24–48 hours.</p>
              <button
                onClick={() => setStatus(null)}
                className="mt-2 border border-[#2a2a2a] text-[#888] text-sm px-5 py-2 rounded-lg bg-transparent cursor-pointer hover:border-[#e8650a] hover:text-[#e8650a] transition-colors duration-200"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-1">Send a Message</h2>
              <p className="text-[#888] text-sm mb-7">
                Fill in the details and I&apos;ll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] tracking-[0.1em] uppercase text-[#888] font-medium mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-[#f0ece6] text-sm outline-none placeholder-[#444] focus:border-[#e8650a] focus:ring-2 focus:ring-[rgba(232,101,10,0.15)] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.1em] uppercase text-[#888] font-medium mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      required
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-[#f0ece6] text-sm outline-none placeholder-[#444] focus:border-[#e8650a] focus:ring-2 focus:ring-[rgba(232,101,10,0.15)] transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-[11px] tracking-[0.1em] uppercase text-[#888] font-medium mb-2">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Collaboration"
                    required
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-[#f0ece6] text-sm outline-none placeholder-[#444] focus:border-[#e8650a] focus:ring-2 focus:ring-[rgba(232,101,10,0.15)] transition-all duration-200"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[11px] tracking-[0.1em] uppercase text-[#888] font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, budget..."
                    required
                    rows={5}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-[#f0ece6] text-sm outline-none placeholder-[#444] focus:border-[#e8650a] focus:ring-2 focus:ring-[rgba(232,101,10,0.15)] transition-all duration-200 resize-none"
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p className="text-red-400 text-sm text-center mb-4">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#e8650a] hover:bg-[#f0823a] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl py-4 flex items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}