import { useEffect, useMemo, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  { id: "home", label: "Launch" },
  { id: "mission", label: "Mission" },
  { id: "about", label: "Origin" },
  { id: "skills", label: "Stack" },
  { id: "projects", label: "Builds" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Signal" },
];

const skillClusters = [
  {
    icon: Code2,
    title: "Core Languages",
    skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "TypeScript"],
  },
  {
    icon: Cpu,
    title: "Frontend Systems",
    skills: ["React", "Tailwind CSS", "Responsive UI", "Animation", "Accessibility"],
  },
  {
    icon: Database,
    title: "Backend + Data",
    skills: ["Node.js", "Express", "MySQL", "APIs", "Data Modeling"],
  },
  {
    icon: Terminal,
    title: "Command Deck",
    skills: ["Git", "GitHub", "VS Code", "Netlify", "Debugging"],
  },
];

const projects = [
  {
    title: "Ezocha Farms",
    type: "Live Client Site",
    description:
      "A responsive farm platform for showcasing services, products, and modern agricultural operations.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    href: "https://ezochafarms.netlify.app",
    status: "ONLINE",
  },
  {
    title: "Sunny Weather App",
    type: "API Interface",
    description:
      "Weather search interface wired into OpenWeatherMap for live city forecasts and clean data display.",
    tech: ["JavaScript", "API", "CSS", "HTML"],
    href: "https://github.com/teethaking/sunny-weather-app",
    status: "REPO",
  },
  {
    title: "School Management System",
    type: "Data System",
    description:
      "A Java + MySQL student management concept built with team collaboration and database design.",
    tech: ["Java", "MySQL", "Team Build", "CRUD"],
    href: "",
    status: "LAB",
  },
  {
    title: "Portfolio Command Center",
    type: "Personal Brand",
    description:
      "This sci-fi portfolio rebuild: interactive bot motion, navigation console, and deploy-ready React UI.",
    tech: ["React", "Tailwind", "Vite", "Motion UI"],
    href: "https://github.com/teethaking",
    status: "ACTIVE",
  },
];

const stats = [
  { value: "2023", label: "Coding since" },
  { value: "06+", label: "Core technologies" },
  { value: "24h", label: "Response window" },
  { value: "∞", label: "Learning loop" },
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);

  const navMap = useMemo(() => new Map(navItems.map((item) => [item.id, item.label])), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.4, 0.7] }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = shellRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    shellRef.current?.style.setProperty("--cursor-x", `${x * 100}%`);
    shellRef.current?.style.setProperty("--cursor-y", `${y * 100}%`);
    shellRef.current?.style.setProperty("--tilt-x", `${(0.5 - y) * 18}deg`);
    shellRef.current?.style.setProperty("--tilt-y", `${(x - 0.5) * 22}deg`);
    shellRef.current?.style.setProperty("--bot-x", `${(x - 0.5) * 34}px`);
    shellRef.current?.style.setProperty("--bot-y", `${(y - 0.5) * 24}px`);
  };

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <div ref={shellRef} className="sci-shell" onPointerMove={handlePointerMove}>
      <div className="sci-noise" />
      <div className="sci-grid" />
      <div className="cursor-orb" />

      <nav className="command-nav">
        <button className="brand-chip" onClick={() => jumpTo("home")} aria-label="Go to launch section">
          <Bot className="h-5 w-5" />
          <span>AGBAJI.OS</span>
        </button>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => jumpTo(item.id)}
              className={`nav-node ${activeSection === item.id ? "nav-node-active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <span className="status-dot" />
          <span className="text-xs uppercase tracking-[0.32em] text-cyan-100/70">
            {navMap.get(activeSection)} active
          </span>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="border border-cyan-300/20 text-cyan-100 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-command-menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {menuOpen && (
        <div id="mobile-command-menu" className="mobile-command">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => jumpTo(item.id)}
              className={`mobile-node ${activeSection === item.id ? "mobile-node-active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <main>
        <section id="home" className="section-panel hero-panel">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-8">
              <Badge className="border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-cyan-100 hover:bg-cyan-300/15">
                <Radar className="mr-2 h-4 w-4" />
                Portfolio signal locked
              </Badge>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-white md:text-7xl xl:text-8xl">
                  Teeee Agbaji
                  <span className="block text-cyan-glow">Code pilot</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                  I build clean web systems, useful interfaces, and energetic digital experiences with React,
                  JavaScript, Python, Java, and a problem-solving mindset.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="sci-button" onClick={() => jumpTo("projects")}>
                  View builds <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="sci-button-outline" onClick={() => jumpTo("contact")}>
                  Send signal <Mail className="ml-2 h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="metric-card">
                    <div className="text-2xl font-black text-cyan-200">{stat.value}</div>
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bot-stage" aria-label="Interactive profile bot responds to pointer movement">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="bot-card">
                <div className="bot-visor">
                  <img src={profileImage} alt="Tobechukwu Agbaji sci-fi profile avatar" />
                  <div className="scanline" />
                </div>
                <div className="bot-face">
                  <span className="bot-eye" />
                  <span className="bot-eye" />
                  <span className="bot-mouth" />
                </div>
                <div className="bot-readout">
                  <span>NEURAL AVATAR</span>
                  <strong>TRACKING INPUT</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="section-panel">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Mission control"
              title="Dynamic portfolio, built like a command center."
              description="This site is designed as a fast sci-fi console: deep navigation, glowing panels, responsive motion, and clear routes to projects, skills, origin story, and contact."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: BrainCircuit,
                  title: "Think",
                  body: "Break ideas into systems, data flows, screens, and practical milestones.",
                },
                {
                  icon: Rocket,
                  title: "Build",
                  body: "Turn sketches into responsive apps with React, JavaScript, APIs, and clean UI.",
                },
                {
                  icon: ShieldCheck,
                  title: "Ship",
                  body: "Deploy polished experiences, debug issues, and keep improving the product loop.",
                },
              ].map((item) => (
                <HoloCard key={item.title}>
                  <item.icon className="h-9 w-9 text-cyan-200" />
                  <h3 className="mt-6 text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-slate-400">{item.body}</p>
                </HoloCard>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-panel">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeader
                eyebrow="Origin file"
                title="Young developer, high-energy builder."
                description="I’m Tobechukwu Agbaji from Kaduna, Nigeria — studying, freelancing, building projects, and pushing deeper into software, robotics, and web systems."
              />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <HoloCard>
                <GraduationCap className="h-8 w-8 text-cyan-200" />
                <h3 className="mt-5 text-xl font-bold text-white">National Institute of Technology</h3>
                <p className="mt-2 text-slate-400">Expected graduation: June 2026 • Kaduna, Nigeria</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["React", "Java", "JavaScript", "Robotics Team", "Math Club"].map((item) => (
                    <Badge key={item} className="holo-badge">
                      {item}
                    </Badge>
                  ))}
                </div>
              </HoloCard>
              <HoloCard>
                <Zap className="h-8 w-8 text-cyan-200" />
                <h3 className="mt-5 text-xl font-bold text-white">Experience</h3>
                <p className="mt-2 text-slate-400">
                  Freelance Web Developer since 2023, plus a TechTrend Innovations coding internship in 2024.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Client sites", "Testing", "Code reviews", "Collaboration"].map((item) => (
                    <Badge key={item} className="holo-badge">
                      {item}
                    </Badge>
                  ))}
                </div>
              </HoloCard>
            </div>
          </div>
        </section>

        <section id="skills" className="section-panel">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Tech arsenal"
              title="Tools for frontend, backend, and problem solving."
              description="A stacked console of the technologies I use to prototype, build, debug, and deploy."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {skillClusters.map((cluster) => (
                <HoloCard key={cluster.title}>
                  <cluster.icon className="h-8 w-8 text-cyan-200" />
                  <h3 className="mt-5 text-xl font-bold text-white">{cluster.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cluster.skills.map((skill) => (
                      <Badge key={skill} className="holo-badge">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </HoloCard>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-panel">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Build archive"
              title="Projects with real-world signal."
              description="A mix of live work, repo experiments, data systems, and this portfolio command center."
            />

            <div className="grid gap-5 lg:grid-cols-2">
              {projects.map((project, index) => (
                <div key={project.title} className="project-card">
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
                          0{index + 1} / {project.type}
                        </div>
                        <h3 className="mt-3 text-2xl font-black text-white">{project.title}</h3>
                      </div>
                      <Badge className="border-emerald-300/30 bg-emerald-300/10 text-emerald-100">
                        {project.status}
                      </Badge>
                    </div>
                    <p className="mt-5 text-slate-400">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} className="holo-badge">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noopener noreferrer" className="sci-link mt-6">
                        Open transmission <Globe2 className="ml-2 h-4 w-4" />
                      </a>
                    ) : (
                      <div className="mt-6 text-sm uppercase tracking-[0.28em] text-slate-500">Internal lab build</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" className="section-panel">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              eyebrow="Timeline"
              title="The route so far."
              description="A quick read of the path from learning to freelancing, internships, and current opportunities."
            />
            <div className="timeline">
              {[
                ["2023", "Started freelance web builds and earned Python / responsive design certifications."],
                ["2024", "Completed Java SE 8 Programmer I and interned with TechTrend Innovations."],
                ["2025", "Expanded into React, Node.js, APIs, and more polished interface systems."],
                ["Now", "Open for internships, entry-level roles, freelance builds, and open-source collaboration."],
              ].map(([year, body]) => (
                <div key={year} className="timeline-item">
                  <span>{year}</span>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-panel pb-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Signal uplink"
              title="Ready to connect."
              description="Send a message, scan the socials, or launch a collaboration. The channel is open."
            />

            <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
              <HoloCard>
                <div className="grid gap-4 sm:grid-cols-2">
                  <ContactLink icon={Mail} label="Email" value="teeagbaji@gmail.com" href="mailto:teeagbaji@gmail.com" />
                  <ContactLink icon={Phone} label="Phone" value="+234 906 727 5925" href="tel:+2349067275925" />
                  <ContactLink icon={MapPin} label="Base" value="Kaduna, Nigeria" />
                  <ContactLink
                    icon={Linkedin}
                    label="LinkedIn"
                    value="Tobechukwu Agbaji"
                    href="https://www.linkedin.com/in/tobechukwu-agbaji-b259a7345"
                  />
                </div>
              </HoloCard>
              <HoloCard>
                <Sparkles className="h-8 w-8 text-cyan-200" />
                <h3 className="mt-5 text-2xl font-black text-white">Available for opportunities</h3>
                <p className="mt-3 text-slate-400">
                  Internships, entry-level software roles, freelance websites, and collaborative projects.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href="mailto:teeagbaji@gmail.com" className="sci-button">
                    Email me <Mail className="ml-2 h-4 w-4" />
                  </a>
                  <a href="https://github.com/teethaking" target="_blank" rel="noopener noreferrer" className="sci-button-outline">
                    GitHub <Github className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </HoloCard>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => (
  <div className="mb-10 max-w-3xl">
    <div className="mb-3 text-xs font-bold uppercase tracking-[0.42em] text-cyan-300">{eyebrow}</div>
    <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-6xl">{title}</h2>
    <p className="mt-5 text-lg leading-8 text-slate-400">{description}</p>
  </div>
);

const HoloCard = ({ children }: { children: React.ReactNode }) => (
  <div className="holo-card">
    <div className="p-6">{children}</div>
  </div>
);

const ContactLink = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <div className="contact-tile">
      <Icon className="h-5 w-5 text-cyan-200" />
      <div>
        <div className="text-xs uppercase tracking-[0.28em] text-slate-500">{label}</div>
        <div className="mt-1 text-sm font-semibold text-slate-100">{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default Portfolio;
