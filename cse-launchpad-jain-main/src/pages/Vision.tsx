import AnimatedSection from "@/components/AnimatedSection";
import { Target, Globe, Users, Lightbulb } from "lucide-react";

const milestones = [
  { label: "Expanding industry collaborations across emerging technology sectors and enterprise innovation labs." },
  { label: "Building cross-disciplinary innovation labs that merge engineering, design, and business strategy." },
  { label: "Creating founder-in-residence programs that embed experienced entrepreneurs within student cohorts." },
  { label: "Establishing investor demo forums connecting portfolio startups with active venture capital networks." },
  { label: "Launching student-led product accelerators to fast-track MVPs from concept to market." },
];

const values = [
  { icon: Target, title: "Mission-Driven", text: "Every program, partnership, and investment decision is calibrated to maximize founder success and ecosystem impact." },
  { icon: Globe, title: "Globally Connected", text: "Our network spans venture hubs worldwide—ensuring our founders have access to markets, capital, and talent beyond borders." },
  { icon: Users, title: "Community-First", text: "We believe the density of ambition within a cohort is the single greatest predictor of breakthrough outcomes." },
  { icon: Lightbulb, title: "Innovation at Core", text: "We back founders building at the frontier—deep tech, climate, fintech, health, and beyond." },
];

const Vision = () => (
  <main className="pt-24">
    {/* Hero */}
    <section className="section-padding py-24">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-primary font-medium tracking-widest uppercase text-xs mb-4">Our North Star</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
            Vision <span className="text-gradient-purple">2026 and Beyond</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            To build an innovative ecosystem where anyone can start a business and succeed—regardless of background, geography, or access to traditional networks.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {values.map((v, i) => (
          <AnimatedSection key={v.title} delay={i * 0.1}>
            <div className="glass-card p-8 h-full glow-purple hover:border-accent/30 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <v.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding py-24">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="text-primary font-medium tracking-widest uppercase text-xs mb-4 text-center">Roadmap</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">
            Strategic <span className="text-gradient-cyan">Milestones</span>
          </h2>
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {milestones.map((m, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block flex-1" />
                <div className="relative z-10 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
                <div className="flex-1 glass-card p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.label}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Statement */}
    <section className="section-padding py-24">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-display text-2xl md:text-3xl font-bold text-foreground leading-snug">
            "We do not predict the future of entrepreneurship—
            <span className="text-gradient-cyan"> we architect it.</span>"
          </blockquote>
          <p className="text-muted-foreground mt-6 text-sm">— CSE Launchpad Leadership</p>
        </div>
      </AnimatedSection>
    </section>
  </main>
);

export default Vision;
