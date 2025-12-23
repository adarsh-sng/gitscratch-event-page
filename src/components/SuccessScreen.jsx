import { useState } from "react";

export default function SuccessScreen({ message }) {
  const [copied, setCopied] = useState(false);

  const siteUrl = "https://aiclub.vercel.app";

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
    <div className="space-y-8 text-center py-4 px-2">
      <div className="space-y-3">
        <div
          aria-label="confetti"
          className="text-5xl mx-auto w-16 h-16 flex items-center justify-center"
        >
          🎉
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          You are successfully registered!
        </h2>
        <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
          {message ||
            "We look forward to seeing you at the event. Keep an eye on your email for further details."}
        </p>
      </div>

      <div className="space-y-4 pt-4 border-t border-white/10">
        {" "}
        {/* Visual separator */}
        <p className="text-sm text-white/60 uppercase tracking-wide font-medium">
          Share!
        </p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-4 max-w-xl mx-auto w-full">
          <span className="px-6 py-3 rounded-xl bg-black/80 ring-1 backdrop-blur-sm text-white font-mono text-sm font-semibold tracking-wide border border-white/10 truncate w-full sm:flex-1 text-center">
            {siteUrl.replace(/^https?:\/\//, "")}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-xl border text-sm border-white/10 px-6 py-2.5 text-white/80 font-semibold tracking-wide hover:border-blue-400/60 hover:bg-blue-500/10 transition-all duration-200"
          >
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>
      </div>
    </div>
  );
}
