import { ArrowLeft, Compass, Globe, Heart, MapPin } from "lucide-react";

import aboutHero from "../assets/hero.png";
import Navbar from "../components/common/Navbar";

const stats = [
  { value: "50K+", label: "Trips planned" },
  { value: "120+", label: "Countries covered" },
  { value: "98%", label: "Traveler satisfaction" },
  { value: "10+", label: "Years of experience" },
];


export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar/>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </a>
      </div>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              About Us
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:pt-3">
              We are committed to making travel planning effortless and
              inspiring. Explore destinations, build itineraries, and embark on
              journeys that feel truly yours — all in one place.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-border shadow-sm md:mt-16">
            <img
              src={aboutHero}
              alt="A group of travelers overlooking a misty mountain valley at sunrise"
              width={1344}
              height={672}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Empowering Global
                <br />
                Travel Access
              </h2>
            </div>

            <div className="space-y-10">
              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Our Vision
                  </h3>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  To be the leading travel planning platform, providing
                  accessible, intuitive, and inspiring tools that help every
                  traveler explore the world with confidence and curiosity.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-primary" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Our Mission
                  </h3>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  To support travelers in crafting unforgettable trips through
                  smart recommendations, seamless planning, and a deep respect
                  for the places and people they visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background p-6 text-center shadow-sm">
              <MapPin className="mx-auto h-6 w-6 text-primary" />
              <h3 className="mt-4 font-semibold text-foreground">
                Curated Places
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Hand-picked destinations and local gems tailored to your style.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 text-center shadow-sm">
              <Heart className="mx-auto h-6 w-6 text-primary" />
              <h3 className="mt-4 font-semibold text-foreground">
                Made for You
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Personalized itineraries that match your pace, budget, and
                interests.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 text-center shadow-sm">
              <Compass className="mx-auto h-6 w-6 text-primary" />
              <h3 className="mt-4 font-semibold text-foreground">
                Travel Confidently
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Clear plans, helpful tips, and support so you can focus on the
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
