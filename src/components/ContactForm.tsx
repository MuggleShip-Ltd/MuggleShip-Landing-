"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

type SubmitState = "idle" | "submitting" | "success" | "error";

const COUNTRIES = [
  "United Kingdom",
  "United States",
  "Canada",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Turkey",
  "Australia",
  "Japan",
  "Other",
];

const VOLUME_VALUES: Record<string, string> = {
  vol1: "<500",
  vol2: "500-2000",
  vol3: "2000-10000",
  vol4: "10000+",
};

const fieldClass =
  "w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none";

const labelClass =
  "block text-sm font-medium mb-1.5 text-[var(--ink-200)]";

function RequiredMark() {
  return <span className="ml-0.5 text-[var(--ember)]">*</span>;
}

export default function ContactForm() {
  const { t } = useLanguage();
  const [state, setState] = useState<SubmitState>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === "submitting") return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check — silently succeed
    const honey = (formData.get("website") || "").toString().trim();
    if (honey) {
      setState("success");
      return;
    }

    const action = process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION;

    setState("submitting");

    if (action && action.length > 0) {
      try {
        const res = await fetch(action, {
          method: "POST",
          body: formData,
        });
        if (res.ok) {
          setState("success");
        } else {
          setState("error");
        }
      } catch {
        setState("error");
      }
      return;
    }

    // Fallback: build mailto URL
    try {
      const get = (k: string) => (formData.get(k) || "").toString();
      const lines = [
        `${t.contact.nameLabel}: ${get("name")}`,
        `${t.contact.companyLabel}: ${get("company")}`,
        `${t.contact.emailLabel}: ${get("email")}`,
        `${t.contact.phoneLabel}: ${get("phone")}`,
        `${t.contact.countryLabel}: ${get("country")}`,
        `${t.contact.volumeLabel}: ${get("volume")}`,
        "",
        `${t.contact.messageLabel}:`,
        get("message"),
      ];
      const body = encodeURIComponent(lines.join("\n"));
      const subject = encodeURIComponent("Quote Request");
      const mailtoUrl = `mailto:info@muggleship.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
      setState("success");
    } catch {
      setState("error");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 relative pt-24 pb-20 md:pt-28 md:pb-24 overflow-hidden min-h-screen flex items-center"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative">
        {/* Cinematic header */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="scene-label-ember">SCENE 12</span>
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">{t.contact.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.0] tracking-[-0.035em] font-medium text-[var(--ink-100)]">
                {t.contact.title1}{" "}
                <span className="font-display italic text-[var(--ember)]">
                  {t.contact.title2}
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-3">
              <p className="text-base text-[var(--ink-300)] leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* LEFT COLUMN — Direct contact */}
          <div className="lg:col-span-5">
            <Reveal delay={140}>
              <div
                className="rounded-2xl p-7"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-faint)",
                }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--ember)] uppercase">
                    XIII.I
                  </span>
                  <span className="scene-label">{t.contact.infoTitle}</span>
                </div>

                {/* Two offices */}
                <div className="space-y-7 mb-8">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.24em] uppercase mb-2" style={{ color: "var(--ember)" }}>
                      01. {t.contact.infoLondon}
                    </div>
                    <div className="flex items-start gap-2.5 text-sm" style={{ color: "var(--ink-200)" }}>
                      <MapPin size={15} strokeWidth={1.4} className="flex-shrink-0 mt-0.5" style={{ color: "var(--ember-glow)" }} />
                      <span className="font-mono">{t.contact.infoLondonAddress}</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.24em] uppercase mb-2" style={{ color: "var(--ember)" }}>
                      02. {t.contact.infoOps}
                    </div>
                    <div className="flex items-start gap-2.5 text-sm" style={{ color: "var(--ink-200)" }}>
                      <MapPin size={15} strokeWidth={1.4} className="flex-shrink-0 mt-0.5" style={{ color: "var(--ember-glow)" }} />
                      <span className="font-mono">{t.contact.infoOpsAddress}</span>
                    </div>
                  </div>
                </div>

                {/* Shared contact */}
                <div className="pt-6 space-y-4" style={{ borderTop: "1px solid var(--border-faint)" }}>
                  <a
                    href={`mailto:${t.contact.infoEmail}`}
                    className="flex items-center gap-2.5 text-sm transition-colors"
                    style={{ color: "var(--ink-200)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--ember)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--ink-200)"; }}
                  >
                    <Mail size={15} strokeWidth={1.4} style={{ color: "var(--ember-glow)" }} />
                    {t.contact.infoEmail}
                  </a>
                  <a
                    href={`tel:${t.contact.infoPhone.replace(/[^+\d]/g, "")}`}
                    className="flex items-center gap-2.5 text-sm transition-colors font-mono"
                    style={{ color: "var(--ink-200)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--ember)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--ink-200)"; }}
                  >
                    <Phone size={15} strokeWidth={1.4} style={{ color: "var(--ember-glow)" }} />
                    {t.contact.infoPhone}
                  </a>
                  <div className="flex items-center gap-2.5 text-sm" style={{ color: "var(--ink-300)" }}>
                    <Clock size={15} strokeWidth={1.4} style={{ color: "var(--ember-glow)" }} />
                    {t.contact.infoHours}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN — Form */}
          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <div
                className="rounded-2xl p-8 md:p-10"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-faint)",
                }}
              >
                {state === "success" ? (
                  <div
                    className="flex flex-col items-center text-center py-10 px-4 rounded-2xl"
                    style={{
                      border: "1px solid rgba(255,106,31,0.4)",
                      background: "rgba(249,115,22,0.16)",
                    }}
                  >
                    <span
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                      style={{
                        border: "1px solid rgba(255,106,31,0.4)",
                        background: "rgba(255,106,31,0.12)",
                      }}
                    >
                      <CheckCircle2
                        size={28}
                        style={{ color: "var(--ember)" }}
                      />
                    </span>
                    <h3
                      className="text-xl font-medium mb-2"
                      style={{ color: "var(--ink-100)" }}
                    >
                      {t.contact.successTitle}
                    </h3>
                    <p
                      className="text-sm max-w-md leading-relaxed"
                      style={{ color: "var(--ink-300)" }}
                    >
                      {t.contact.successBody}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--ember)] uppercase">
                        XIII.II
                      </span>
                      <span className="scene-label">
                        {t.contact.formTitle}
                      </span>
                    </div>

                    {state === "error" && (
                      <div
                        role="alert"
                        className="mb-6 flex items-start gap-3 rounded-xl p-4"
                        style={{
                          border: "1px solid rgba(255,106,31,0.4)",
                          background: "rgba(0,0,0,0.4)",
                        }}
                      >
                        <AlertCircle
                          size={20}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: "var(--ember-glow)" }}
                        />
                        <div className="flex-1">
                          <p
                            className="text-sm font-medium"
                            style={{ color: "var(--ink-100)" }}
                          >
                            {t.contact.errorTitle}
                          </p>
                          <p
                            className="text-sm mt-0.5"
                            style={{ color: "var(--ink-300)" }}
                          >
                            {t.contact.errorBody}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setState("idle")}
                          className="text-sm font-medium underline underline-offset-2 transition-colors"
                          style={{ color: "var(--ember)" }}
                        >
                          {t.contact.retry}
                        </button>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate={false}>
                      {/* Honeypot */}
                      <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-9999px" }}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label htmlFor="cf-name" className={labelClass}>
                            {t.contact.nameLabel}
                            <RequiredMark />
                          </label>
                          <input
                            id="cf-name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder={t.contact.namePh}
                            className={fieldClass}
                          />
                        </div>

                        {/* Company */}
                        <div>
                          <label htmlFor="cf-company" className={labelClass}>
                            {t.contact.companyLabel}
                            <RequiredMark />
                          </label>
                          <input
                            id="cf-company"
                            name="company"
                            type="text"
                            required
                            autoComplete="organization"
                            placeholder={t.contact.companyPh}
                            className={fieldClass}
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="cf-email" className={labelClass}>
                            {t.contact.emailLabel}
                            <RequiredMark />
                          </label>
                          <input
                            id="cf-email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder={t.contact.emailPh}
                            className={fieldClass}
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="cf-phone" className={labelClass}>
                            {t.contact.phoneLabel}
                          </label>
                          <input
                            id="cf-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder={t.contact.phonePh}
                            className={fieldClass}
                          />
                        </div>

                        {/* Country */}
                        <div>
                          <label htmlFor="cf-country" className={labelClass}>
                            {t.contact.countryLabel}
                            <RequiredMark />
                          </label>
                          <select
                            id="cf-country"
                            name="country"
                            required
                            defaultValue=""
                            className={fieldClass}
                          >
                            <option value="" disabled>
                              {t.contact.countryPh}
                            </option>
                            {COUNTRIES.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Volume */}
                        <div>
                          <label htmlFor="cf-volume" className={labelClass}>
                            {t.contact.volumeLabel}
                            <RequiredMark />
                          </label>
                          <select
                            id="cf-volume"
                            name="volume"
                            required
                            defaultValue=""
                            className={fieldClass}
                          >
                            <option value="" disabled>
                              {t.contact.volumePh}
                            </option>
                            <option value={VOLUME_VALUES.vol1}>
                              {t.contact.vol1}
                            </option>
                            <option value={VOLUME_VALUES.vol2}>
                              {t.contact.vol2}
                            </option>
                            <option value={VOLUME_VALUES.vol3}>
                              {t.contact.vol3}
                            </option>
                            <option value={VOLUME_VALUES.vol4}>
                              {t.contact.vol4}
                            </option>
                          </select>
                        </div>


                        {/* Message */}
                        <div className="md:col-span-2">
                          <label htmlFor="cf-message" className={labelClass}>
                            {t.contact.messageLabel}
                            <RequiredMark />
                          </label>
                          <textarea
                            id="cf-message"
                            name="message"
                            required
                            rows={4}
                            placeholder={t.contact.messagePh}
                            className={fieldClass + " resize-y min-h-[120px]"}
                          />
                        </div>

                        {/* Consent */}
                        <div className="md:col-span-2">
                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              name="consent"
                              required
                              className="mt-1 h-4 w-4 rounded"
                              style={{
                                accentColor: "var(--ember)",
                              }}
                            />
                            <span
                              className="text-sm leading-relaxed"
                              style={{ color: "var(--ink-300)" }}
                            >
                              {t.contact.consent}
                              <RequiredMark />{" "}
                              <Link
                                href="/privacy"
                                className="underline underline-offset-2 transition-colors"
                                style={{ color: "var(--ember)" }}
                              >
                                View Privacy Policy
                              </Link>
                            </span>
                          </label>
                        </div>

                        {/* Submit */}
                        <div className="md:col-span-2 pt-2">
                          <button
                            type="submit"
                            disabled={state === "submitting"}
                            className="group inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-medium transition-all disabled:cursor-not-allowed disabled:opacity-70"
                            style={{
                              background: "var(--ember)",
                              color: "var(--bg-void)",
                              boxShadow:
                                "0 0 0 1px rgba(255,106,31,0.4), 0 12px 36px -8px rgba(255,106,31,0.5)",
                            }}
                          >
                            {state === "submitting" ? (
                              <>
                                <span
                                  className="inline-block w-4 h-4 rounded-full border-2 animate-spin"
                                  style={{
                                    borderColor: "rgba(10,8,7,0.3)",
                                    borderTopColor: "var(--bg-void)",
                                  }}
                                />
                                {t.contact.submitting}
                              </>
                            ) : (
                              <>
                                <Send
                                  size={18}
                                  className="transition-transform group-hover:translate-x-0.5"
                                />
                                {t.contact.submit}
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
