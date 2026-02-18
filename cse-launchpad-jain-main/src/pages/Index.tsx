import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center section-padding pt-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">CSE Launchpad — Incubation Excellence</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
              Engineering the{" "}
              <span className="text-gradient-cyan">Architects</span>{" "}
              of Tomorrow
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              A premier institutional incubator transforming ambitious students into industry-defining founders through structured mentorship, capital access, and operational excellence.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild className="border-border text-foreground hover:bg-muted font-semibold px-8 text-base">
                <Link to="/events">Explore Events</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding py-24">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-primary font-medium tracking-widest uppercase text-xs mb-4">Who We Are</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Building the <span className="text-gradient-purple">Future</span>, Together
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              CSE Launchpad operates at the intersection of academic rigor and entrepreneurial ambition. We are an institutional engine designed to systematically convert technical talent into market-ready founders through structured programs, capital pathways, and a world-class mentor network.
            </p>
            <Button variant="outline" asChild className="border-border text-foreground hover:bg-muted font-semibold">
              <Link to="/about">Learn More About Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-24">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center glass-card p-12 md:p-16 glow-cyan">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to <span className="text-gradient-cyan">Launch</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
              Join the next cohort of founders building the future. Applications are reviewed on a rolling basis—exceptional founders are admitted regardless of stage.
            </p>
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 text-base">
              <Link to="/events">Explore Events <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Index;
