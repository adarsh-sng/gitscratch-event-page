import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import clsx from "clsx";
import confetti from "canvas-confetti";
import { ConfettiButton } from "../components/ui/confetti.tsx";
import SuccessScreen from "../components/SuccessScreen.jsx";

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

function RouteComponent() {
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [errors, setErrors] = useState({});
  const submitButtonRef = useRef(null);

  const fireCelebration = () => {
    if (typeof window === "undefined") return;
    const button = submitButtonRef.current;
    const defaults = {
      particleCount: 140,
      spread: 65,
      startVelocity: 45,
      origin: { y: 0.6 },
    };
    if (!button) {
      confetti(defaults);
      return;
    }
    const rect = button.getBoundingClientRect();
    confetti({
      ...defaults,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const name = formData.get("entry.2029581201")?.toString().trim() ?? "";
    const regNo = formData.get("entry.822319076")?.toString().trim() ?? "";
    const email = formData.get("entry.1046584896")?.toString().trim() ?? "";

    const newErrors = {};

    if (!name) newErrors.name = "Please add your full name.";
    if (!regNo) newErrors.regNo = "Registration number is required.";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email address is required.";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    setErrors({});

    try {
      await fetch(e.target.action, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setRegistered(true);
      fireCelebration();
      e.target.reset();
    } catch (error) {
      setRegistered(false);
      setErrors({ submit: "Submission failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col  bg-notion items-center py-6 px-4 mb-4 sm:px-8 lg:px-8">
      <div className="flex items-center mb-5">
        <img src="/notion.png" className="h-10 w-10 object-contain mr-3" />
        <span className="text-white/40 scale-110">×</span>
        <img src="/aiclubc.svg" className="h-12 w-20 object-contain -ml-1" />
      </div>
      <main className="grow justify-center">
        <div className="w-full max-w-3xl bg-white/5 backdrop-blur rounded-2xl shadow-lg ring-1 ring-white/6 p-8 sm:p-12">
          {registered ? (
            <SuccessScreen />
          ) : (
            <>
              <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                Register for the  <span className="text-green-400">$</span>GitScratch
              </h1>
              <p className="text-sm text-white/70 mb-6">
                Fill in your details to secure your spot.
              </p>

              <form
                className="space-y-4"
                onSubmit={handleSubmit}
                action={
                  "https://docs.google.com/forms/d/e/1FAIpQLSeepxwIRtyWKiHdBspRTtSXHaLBSPqtNqXiRKJJIHKyi-AxSw/formResponse?"
                }
                method="POST"
                noValidate
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/80 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="entry.2029581201"
                    type="text"
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={clsx(
                      "w-full rounded-lg bg-white/3 border border-white/8 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition",
                      errors.name && "border-red-500/60 focus:ring-red-500"
                    )}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="regno"
                    className="block text-sm font-medium text-white/80 mb-1"
                  >
                    Registration Number
                  </label>
                  <input
                    id="regno"
                    name="entry.822319076"
                    type="text"
                    required
                    aria-invalid={Boolean(errors.regNo)}
                    aria-describedby={errors.regNo ? "regno-error" : undefined}
                    className={clsx(
                      "w-full rounded-lg bg-white/3 border border-white/8 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition",
                      errors.regNo && "border-red-500/60 focus:ring-red-500"
                    )}
                  />
                  {errors.regNo && (
                    <p id="regno-error" className="mt-2 text-sm text-red-400">
                      {errors.regNo}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80 mb-1"
                  >
                    Email ID
                  </label>
                  <input
                    id="email"
                    name="entry.1046584896"
                    type="email"
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={clsx(
                      "w-full rounded-lg bg-white/3 border border-white/8 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition",
                      errors.email && "border-red-500/60 focus:ring-red-500"
                    )}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <ConfettiButton
                    type="submit"
                    disabled={loading}
                    fireOnClick={false}
                    ref={submitButtonRef}
                    className="w-full text-lg inline-flex items-center justify-center rounded-lg bg-[#0a66c2] hover:bg-[#004182] transition text-white font-medium px-4 py-6 mt-4"
                  >
                    {loading ? "Submitting..." : "Submit Registration"}
                  </ConfettiButton>
                </div>

                {errors.submit && (
                  <div className="p-3 rounded-lg text-sm font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                    {errors.submit}
                  </div>
                )}
              </form>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
