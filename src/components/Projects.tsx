import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Ezocha Farms",
      description: "A comprehensive farm management website showcasing modern agricultural practices and services. Built with responsive design and user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://ezochafarms.netlify.app",
      githubUrl: "",
      featured: true,
      image: "🌾"
    },
    {
      title: "Personal Portfolio Website",
      description: "Created a personal portfolio website using HTML, CSS, and JavaScript to showcase projects and skills. Hosted on GitHub Pages.",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      liveUrl: "https://teethaking.github.io",
      githubUrl: "https://github.com/teethaking",
      featured: false,
      image: "💼"
    },
    {
      title: "Weather App",
      description: "Developed a weather application using JavaScript and OpenWeatherMap API to fetch and display weather information based on user input.",
      technologies: ["JavaScript", "API Integration", "CSS", "HTML"],
      liveUrl: "",
      githubUrl: "",
      featured: false,
      image: "🌤️"
    },
    {
      title: "School Management System",
      description: "Collaborated with peers to develop a simple management system for school's student data using Java and MySQL database.",
      technologies: ["Java", "MySQL", "Database Design", "Team Collaboration"],
      liveUrl: "",
      githubUrl: "",
      featured: false,
      image: "🏫"
    }
  ];

  return (
    <section className="min-h-screen section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in 
            web development, programming, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`card-hover animate-slide-up ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{project.image}</span>
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-4">
                  {project.liveUrl && (
                    <Button 
                      variant="default" 
                      size="sm" 
                      asChild
                      className="bg-primary hover:bg-primary-hover"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <Badge variant="secondary" className="px-3 py-1">
                      In Development
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="card-hover bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always working on new projects and learning new technologies. 
                Check out my GitHub for more recent work and contributions.
              </p>
              <Button asChild className="bg-primary hover:bg-primary-hover">
                <a href="https://github.com/teethaking" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;