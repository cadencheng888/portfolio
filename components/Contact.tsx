"use client";

import { useState } from "react";
import SectionHead from "./SectionHead";
import { CONTACT_ROWS } from "@/lib/data";

type Errors = { name?: string; email?: string; message?: string };

const inputClasses =
  "w-full rounded-xl border border-line/18 bg-white/3 px-4 py-3.5 text-[15px] text-fg outline-none transition-[border-color,box-shadow] duration-200 focus:border-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.14)]";

const labelClasses =
  "mb-[9px] block font-grotesk text-[11px] tracking-[0.16em] text-fg-faint uppercase";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      setErrors((errs) => ({ ...errs, [field]: undefined }));
    };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = "Please enter a valid email address.";
    if (!form.message.trim()) errs.message = "Please enter a message.";
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSendError(false);
    setSending(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/cfc005@ucsd.edu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _subject: `Portfolio contact from ${form.name.trim()}`,
        }),
      });
      // FormSubmit returns HTTP 200 even on failure; the JSON `success`
      // field (a string) is the real result.
      const data = await res.json();
      if (!res.ok || String(data.success) !== "true")
        throw new Error(data.message || `Request failed: ${res.status}`);
      setSent(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-[90px] px-[clamp(24px,6vw,120px)] pt-[clamp(84px,12vh,150px)] pb-[clamp(60px,8vh,90px)]"
    >
      <div className="mx-auto max-w-[1120px]">
        <SectionHead title="Contact" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-[clamp(32px,5vw,64px)]">
          <div>
            <h2 className="font-grotesk text-[clamp(32px,4.5vw,52px)] leading-[1.05] font-bold tracking-[-0.02em] text-fg-bright">
              Let&apos;s build something.
            </h2>
            <p className="mt-[22px] max-w-[44ch] text-[16.5px] leading-[1.7] text-fg-muted">
              I&apos;m always open to internships, collaborations, and a good
              hard problem. Drop a note or reach out directly.
            </p>
            <div className="mt-[34px] flex flex-col gap-0.5">
              {CONTACT_ROWS.map((row) => (
                <a
                  key={row.label}
                  href={row.href}
                  target={row.external ? "_blank" : undefined}
                  className="flex items-center justify-between gap-4 border-b border-line/14 px-1 py-4 text-fg hover:text-accent"
                >
                  <span className="font-grotesk text-[11px] tracking-[0.2em] text-fg-faint uppercase">
                    {row.label}
                  </span>
                  <span className="text-[15.5px] font-medium">{row.value}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[18px] border border-line/16 bg-linear-to-b from-[rgba(244,246,247,0.55)] to-[rgba(236,239,240,0.3)] p-[clamp(24px,3vw,36px)]">
            {!sent ? (
              <form
                onSubmit={submit}
                noValidate
                className="flex flex-col gap-[18px]"
              >
                <div>
                  <label htmlFor="cf-name" className={labelClasses}>
                    Name
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className={inputClasses}
                  />
                  {errors.name && (
                    <div className="mt-[7px] font-grotesk text-xs text-error">
                      {errors.name}
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="cf-email" className={labelClasses}>
                    Email
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                  {errors.email && (
                    <div className="mt-[7px] font-grotesk text-xs text-error">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="cf-message" className={labelClasses}>
                    Message
                  </label>
                  <textarea
                    id="cf-message"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="What's on your mind?"
                    className={`${inputClasses} resize-y`}
                  />
                  {errors.message && (
                    <div className="mt-[7px] font-grotesk text-xs text-error">
                      {errors.message}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="mt-1 cursor-pointer rounded-xl bg-accent px-[26px] py-[15px] font-grotesk text-[15.5px] font-bold text-accent-ink shadow-[0_10px_30px_rgba(37,99,235,0.24)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(37,99,235,0.38)] disabled:cursor-default disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {sending ? "Sending…" : "Send message →"}
                </button>
                {sendError && (
                  <div className="font-grotesk text-xs text-error">
                    Something went wrong sending your message. Please try again,
                    or email me directly at{" "}
                    <a href="mailto:cfc005@ucsd.edu" className="underline">
                      cfc005@ucsd.edu
                    </a>
                    .
                  </div>
                )}
              </form>
            ) : (
              <div className="px-3 py-[34px] text-center">
                <div className="mx-auto flex size-[60px] items-center justify-center rounded-full border border-accent/40 bg-accent/12 text-[28px] text-accent">
                  ✓
                </div>
                <h3 className="mt-[22px] font-grotesk text-2xl font-semibold text-fg-bright">
                  Message sent!
                </h3>
                <p className="mx-auto mt-2.5 max-w-[34ch] text-[15px] leading-[1.6] text-fg-muted">
                  Thanks for reaching out. I&apos;ll get back to you soon. In a
                  hurry? Email me at cfc005@ucsd.edu.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
