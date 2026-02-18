import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { events } from "@/data/events";

const Events = () => (
  <main className="pt-24">
    <section className="section-padding py-24">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-primary font-medium tracking-widest uppercase text-xs mb-4 text-center">Upcoming Initiatives</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center">
            Curated <span className="text-gradient-purple">Events</span>
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            Each event is designed to deliver actionable insights, forge meaningful connections, and accelerate your entrepreneurial journey.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <AnimatedSection key={e.slug} delay={i * 0.08}>
              <div className="glass-card p-7 h-full flex flex-col glow-purple hover:border-accent/30 hover:scale-[1.02] transition-all duration-500 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {e.tag}
                  </span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{e.seats} seats</span>
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{e.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{e.description}</p>
                <Button variant="ghost" size="sm" asChild className="mt-4 w-fit text-primary hover:text-primary/80 p-0 h-auto group-hover:gap-3 transition-all">
                  <Link to={`/events/${e.slug}`}>Learn More <ArrowRight className="w-3 h-3" /></Link>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Events;
