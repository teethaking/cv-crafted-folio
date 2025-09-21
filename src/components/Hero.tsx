import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

interface HeroProps {
  onPageChange: (page: string) => void;
}

const Hero = ({ onPageChange }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="hero-text">Tobechukwu</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6">
            Software Developer & Problem Solver
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Passionate young coder with expertise in Java, Python, React, and Node.js. 
            I build innovative solutions and love turning ideas into reality through code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-[var(--shadow-elegant)]"
              onClick={() => onPageChange("projects")}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onPageChange("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/tobechukwu-agbaji-b259a7345" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/teethaking" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:teeagbaji@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Profile Image Card */}
        <div className="flex justify-center lg:justify-end animate-slide-in-right">
          <Card className="p-8 card-hover bg-gradient-to-br from-card via-card to-primary/5 border-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 animate-float">
                <img
                  src={profileImage}
                  alt="Tobechukwu Agbaji"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-glow">
                <span className="text-primary-foreground font-bold text-lg">👨‍💻</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;