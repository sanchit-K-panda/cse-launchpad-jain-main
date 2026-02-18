import { useParams, Link } from "react-router-dom";
import { events } from "@/data/events";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold mb-4 text-foreground">Event Not Found</h1>
          <Button asChild variant="outline">
            <Link to="/events"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Events</Link>
          </Button>
        </div>
      </main>
    );
  }

  const { article } = event;

  return (
    <main className="pt-24">
      <section className="section-padding py-24">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <Button asChild variant="ghost" size="sm" className="mb-8 text-muted-foreground hover:text-primary">
              <Link to="/events"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Events</Link>
            </Button>

            <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
              {event.tag}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              {event.title}
            </h1>
            <div className="flex items-center gap-1 text-muted-foreground text-sm mb-8">
              <MapPin className="w-4 h-4" />
              <span>{event.seats} seats available</span>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">{event.description}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-10">
              <div className="glass-card p-8 glow-cyan">
                <h2 className="font-display text-xl font-semibold mb-4 text-foreground">Purpose</h2>
                <p className="text-muted-foreground leading-relaxed">{article.purpose}</p>
              </div>

              <div className="glass-card p-8 glow-purple">
                <h2 className="font-display text-xl font-semibold mb-4 text-foreground">What You'll Learn</h2>
                <p className="text-muted-foreground leading-relaxed">{article.learn}</p>
              </div>

              <div className="glass-card p-8 glow-cyan">
                <h2 className="font-display text-xl font-semibold mb-4 text-foreground">Who Should Attend</h2>
                <p className="text-muted-foreground leading-relaxed">{article.audience}</p>
              </div>

              <div className="glass-card p-8 glow-purple">
                <h2 className="font-display text-xl font-semibold mb-4 text-foreground">Event Format</h2>
                <p className="text-muted-foreground leading-relaxed">{article.format}</p>
              </div>

              <div className="glass-card p-8 glow-cyan">
                <h2 className="font-display text-xl font-semibold mb-4 text-foreground">Expected Outcomes</h2>
                <p className="text-muted-foreground leading-relaxed">{article.outcomes}</p>
              </div>

              <div className="glass-card p-8 glow-purple">
                <h2 className="font-display text-xl font-semibold mb-4 text-foreground">Why It Matters</h2>
                <p className="text-muted-foreground leading-relaxed">{article.whyItMatters}</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted font-semibold">
                <Link to="/events"><ArrowLeft className="w-4 h-4 mr-2" /> Explore More Events</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default EventDetail;
