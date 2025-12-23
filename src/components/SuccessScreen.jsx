import { useState } from "react";

export default function SuccessScreen({ message }) {
  const [copied, setCopied] = useState(false);

  const siteUrl = "https://aiclub.vercel.app/register";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <div className="space-y-6 text-center">
      <div className="space-y-2">
        <span role="img" aria-label="confetti" className="text-5xl">
          🎉
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          You are successfully registered!
        </h2>
        <p className="text-sm text-white/70">
          {message ||
            "We look forward to seeing you at the event. Keep an eye on your email for further details. idk write something more here ig"}
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-sm text-white/60 uppercase tracking-wide">Share</p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="px-4 py-2 rounded-lg bg-white/10 text-white/80 font-mono text-sm">
            {siteUrl.replace(/^https?:\/\//, "")}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center rounded-lg border border-white/10 px-4 py-2 text-white/80 hover:border-blue-400/60 transition"
          >
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>
      </div>
    </div>
  );
}
