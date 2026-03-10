"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { socialLinks } from "@/data/social";

const instagram = socialLinks.find((l) => l.platform === "instagram")!;
const email = socialLinks.find((l) => l.platform === "email")!;

export default function ContactModal({
  productName,
  isOpen,
  onClose,
}: {
  productName: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const t = useTranslations("contactModal");

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="bg-surface border border-border rounded-2xl p-8 max-w-sm w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold text-charcoal">{productName}</h3>
        <p className="mt-4 text-warm-gray">
          {t("description")}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <a
            href={instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-dark transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
          <a
            href={`${email.href}?subject=${encodeURIComponent(productName)}`}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-accent text-accent rounded-full font-medium hover:bg-accent hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13L2 4" />
            </svg>
            E-mail
          </a>
        </div>
        <button
          onClick={onClose}
          className="mt-5 text-sm text-warm-gray hover:text-charcoal transition-colors"
        >
          {t("close")}
        </button>
      </div>
    </div>
  );
}
