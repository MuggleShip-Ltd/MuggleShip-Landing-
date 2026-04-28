"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

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

const SERVICE_KEYS = [
  "svcFba",
  "svcFulfillment",
  "svcCross",
  "svcReturns",
  "svcPricing",
  "svcAnalytics",
  "svcListing",
] as const;

type ServiceKey = (typeof SERVICE_KEYS)[number];

const fieldClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200";

const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

function RequiredMark() {
  return <span className="ml-0.5 text-red-500">*</span>;
}

export default function ContactForm() {
  const { t } = useLanguage();
  const [services, setServices] = useState<ServiceKey[]>([]);
  const [state, setState] = useState<SubmitState>("idle");

  const toggleService = (key: ServiceKey) => {
    setServices((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

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

    // Inject services as a comma-joined field
    const serviceLabels = services
      .map((k) => t.contact[k as keyof typeof t.contact] as string)
      .join(", ");
    formData.set("services", serviceLabels);

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
        `${t.contact.servicesLabel}: ${serviceLabels}`,
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
      className="scroll-mt-20 bg-gradient-to-br from-orange-50/40 via-white/60 to-amber-50/30 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-4">
              <MessageCircle size={14} />
              {t.contact.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              {t.contact.title1}{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {t.contact.title2}
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t.contact.subtitle}
            </p>

            <div className="rounded-2xl border border-orange-200/50 bg-white/70 backdrop-blur-sm p-6 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 mb-4">
                {t.contact.infoTitle}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Mail size={16} />
                  </span>
                  <a
                    href={`mailto:${t.contact.infoEmail}`}
                    className="text-sm text-gray-700 hover:text-orange-600 transition-colors leading-9"
                  >
                    {t.contact.infoEmail}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Phone size={16} />
                  </span>
                  <a
                    href={`tel:${t.contact.infoPhone.replace(/[^+\d]/g, "")}`}
                    className="text-sm text-gray-700 hover:text-orange-600 transition-colors leading-9"
                  >
                    {t.contact.infoPhone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <MapPin size={16} />
                  </span>
                  <span className="text-sm text-gray-700 leading-9">
                    {t.contact.infoAddress}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Clock size={16} />
                  </span>
                  <span className="text-sm text-gray-700 leading-9">
                    {t.contact.infoHours}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-orange-200/50 bg-white shadow-xl p-8 md:p-10">
              {state === "success" ? (
                <div className="flex flex-col items-center text-center py-10 px-4 rounded-2xl border-2 border-green-200 bg-green-50/40">
                  <span className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                    <CheckCircle2 size={28} />
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md">
                    {t.contact.successBody}
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {t.contact.formTitle}
                  </h3>

                  {state === "error" && (
                    <div
                      role="alert"
                      className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4"
                    >
                      <AlertCircle
                        size={20}
                        className="flex-shrink-0 text-red-500 mt-0.5"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-red-800">
                          {t.contact.errorTitle}
                        </p>
                        <p className="text-sm text-red-700 mt-0.5">
                          {t.contact.errorBody}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setState("idle")}
                        className="text-sm font-medium text-red-700 hover:text-red-900 underline underline-offset-2"
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

                      {/* Services */}
                      <div className="md:col-span-2">
                        <label className={labelClass}>
                          {t.contact.servicesLabel}
                        </label>
                        <p className="text-xs text-gray-500 mb-3">
                          {t.contact.servicesHint}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {SERVICE_KEYS.map((key) => {
                            const selected = services.includes(key);
                            const label = t.contact[
                              key as keyof typeof t.contact
                            ] as string;
                            return (
                              <button
                                key={key}
                                type="button"
                                onClick={() => toggleService(key)}
                                aria-pressed={selected}
                                className={
                                  "inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all " +
                                  (selected
                                    ? "bg-orange-500 text-white border-orange-500 shadow-sm shadow-orange-500/30"
                                    : "bg-white border-orange-200 text-gray-600 hover:border-orange-300 hover:text-orange-600")
                                }
                              >
                                {label}
                              </button>
                            );
                          })}
                        </div>
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
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-2 focus:ring-orange-200"
                          />
                          <span className="text-sm text-gray-600 leading-relaxed">
                            {t.contact.consent}
                            <RequiredMark />{" "}
                            <Link
                              href="/privacy"
                              className="text-orange-600 hover:text-orange-700 underline underline-offset-2"
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
                          className="group inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-orange-500/30 transition-all hover:from-orange-600 hover:via-orange-700 hover:to-red-600 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {state === "submitting" ? (
                            <>
                              <span className="inline-block w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
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
          </div>
        </div>
      </div>
    </section>
  );
}
