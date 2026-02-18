import AnimatedSection from "@/components/AnimatedSection";
import { Rocket, Target, TrendingUp, BookOpen } from "lucide-react";

const pillars = [
  {
    icon: Rocket,
    title: "Incubation & Funding",
    description:
      "We provide end-to-end support for seed-stage startups—from refining your pitch deck to securing pre-seed and seed capital. Our investor matching engine connects founders with aligned venture partners, angel networks, and institutional funds.",
  },
  {
    icon: Target,
    title: "Product-Market Fit",
    description:
      "Our PMF accelerator guides founders through customer discovery sprints, iterative validation cycles, and go-to-market strategy development. We deploy proprietary frameworks built from analyzing thousands of B2B and B2C launches.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Scaling",
    description:
      "Our growth track covers unit economics optimization, organizational design for hypergrowth, talent acquisition strategy, and Series A preparedness. Founders receive hands-on management training from operators who have scaled companies.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Resources",
    description:
      "Access a curated ecosystem of mentors drawn from Fortune 500 leadership, serial entrepreneurs, and domain-specific experts. Our knowledge hub includes proprietary case studies, recorded masterclasses, and a living library of frameworks.",
  },
];

const About = () => (
  <main className="pt-24">
    {/* Mission */}
    <section className="section-padding py-24">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-primary font-medium tracking-widest uppercase text-xs mb-4">About Us</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Transforming Students into <span className="text-gradient-purple">Founders</span>
              </h1>
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                CSE Launchpad operates at the intersection of academic rigor and entrepreneurial ambition. We are not a conventional incubator—we are an institutional engine designed to systematically convert technical talent into market-ready founders. Our structured incubation methodology has been refined through years of direct engagement with startup ecosystems, venture capital networks, and enterprise innovation labs.
              </p>
              <p>
                The modern entrepreneurial landscape demands more than a brilliant idea. It requires a deep understanding of market dynamics, capital structures, operational frameworks, and the psychological resilience to navigate uncertainty. CSE Launchpad addresses each of these dimensions through a multi-phase program architecture that mirrors the lifecycle of a high-growth startup—from ideation and validation through product-market fit, fundraising, and sustainable scaling.
              </p>
              <p>
                Our cohort-based model ensures that every founder is surrounded by a peer network of equally driven individuals, creating the density of ambition necessary for breakthrough innovation. We pair this with access to a curated mentor network spanning Fortune 500 executives, serial entrepreneurs, active venture capitalists, and domain-specific technologists.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Pillars */}
    <section className="section-padding py-24">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-primary font-medium tracking-widest uppercase text-xs mb-4 text-center">Our Framework</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">
            The Four <span className="text-gradient-cyan">Pillars</span>
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="glass-card p-8 h-full glow-cyan hover:border-primary/30 transition-all duration-500 group hover:scale-[1.02]">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
