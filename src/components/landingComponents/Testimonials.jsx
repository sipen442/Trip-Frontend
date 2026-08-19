import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Wanderwise planned our entire honeymoon in minutes. Every recommendation felt personal and spot-on.",
    name: "Sarah Chen",
    role: "Traveler from Singapore",
  },
  {
    quote:
      "I used to spend hours comparing flights and hotels. Now I just tell Wanderwise what I want and go.",
    name: "Marcus Johnson",
    role: "Traveler from London",
  },
  {
    quote:
      "The itinerary was beautifully organized and easy to share with my friends. Highly recommended.",
    name: "Elena Rossi",
    role: "Traveler from Milan",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-900 py-20 md:py-28 text-white ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Loved by travelers
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            See what people are saying about their Wanderwise journeys.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3  ">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl border border-t-mauve-100 bg-gray-700 p-6 shadow-sm "
            >
              <Quote className="h-6 w-6 text-primary/70" />
              <p className="mt-4 flex-1 text-card-foreground leading-relaxed">
                {item.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
