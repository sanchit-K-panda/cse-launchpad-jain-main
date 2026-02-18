import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Subscribed!", description: "You'll receive our latest updates." });
    setEmail("");
  };

  return (
    <footer className="border-t border-border/50 section-padding py-16 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Logo className="w-8 h-8" />
            <span className="font-display font-bold text-foreground">CSE Launchpad</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Engineering the architects of tomorrow through structured incubation, mentorship, and capital access.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
            <a href="mailto:partnerships@cselaunchpad.org" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Navigate</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">Events</Link>
            <Link to="/vision" className="text-sm text-muted-foreground hover:text-primary transition-colors">Vision 2030</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Connect</h4>
          <p className="text-sm text-muted-foreground">partnerships@cselaunchpad.org</p>
          <p className="text-sm text-muted-foreground mt-1">inquiries@cselaunchpad.org</p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">Get updates on events and cohort openings.</p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-muted/30 border-glass-border text-sm h-9"
            />
            <Button type="submit" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-3 h-9">
              Go
            </Button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border/30 text-center">
        <p className="text-xs text-muted-foreground">© 2025 CSE Launchpad. All rights reserved. A student-led incubation initiative.</p>
      </div>
    </footer>
  );
};

export default Footer;
