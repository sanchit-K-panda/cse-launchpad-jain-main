import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [newsletter, setNewsletter] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Subscribed!", description: "You'll receive our latest updates." });
    setNewsletter("");
  };

  return (
    <main className="pt-24">
      <section className="section-padding py-24">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-primary font-medium tracking-widest uppercase text-xs mb-4 text-center">Get In Touch</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center">
              Contact <span className="text-gradient-cyan">Us</span>
            </h1>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16 leading-relaxed">
              Whether you're a founder, mentor, investor, or partner—we'd love to hear from you.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={0.1}>
              <div className="glass-card p-8 glow-purple">
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">Connect With Us</h3>
                <div className="space-y-3">
                  <a href="mailto:partnerships@cselaunchpad.org" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" /> partnerships@cselaunchpad.org
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" /> CSE Launchpad on LinkedIn
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" /> CSE Launchpad on GitHub
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="w-5 h-5" /> CSE Launchpad on Instagram
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-card p-8 glow-cyan">
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">Newsletter</h3>
                <p className="text-muted-foreground text-sm mb-4">Stay updated with our latest events, cohort openings, and founder insights.</p>
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={newsletter}
                    onChange={(e) => setNewsletter(e.target.value)}
                    required
                    className="bg-muted/30 border-glass-border flex-1"
                  />
                  <Button type="submit" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-4">
                    Subscribe
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
