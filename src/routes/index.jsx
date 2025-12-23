import { createFileRoute } from "@tanstack/react-router";

import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import About from "../components/About";
import Agenda from "../components/Agenda";
import Speakers from "../components/Speakers";
import Cta from "../components/Cta";
import DevPresence from "../components/DevPresence";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DevPresence />
      <Highlights />
      <About />
      <Agenda />
      <Speakers />
      <Cta />
    </div>
  );
}
