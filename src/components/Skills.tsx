import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Globe, Wrench } from "lucide-react";
import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const programmingLanguages = [
    { name: "Java", level: 85 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
  ];

  const frameworks = [
    { name: "React", level: 85 },
    { name: "Node.js", level: 75 },
  ];

  const tools = [
    "Git", "GitHub", "VS Code", "MySQL"
  ];

  const softSkills = [
    "Problem-solving", "Team collaboration", "Time management", "Client communication"
  ];

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number }, index: number }) => (
    <div className="space-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex justify-between">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress
        value={isVisible ? skill.level : 0}
        className="h-2"
      />
    </div>
  );

  return (
    <section className="min-h-screen section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and skills I've developed through my studies, 
            internships, and personal projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <Card className="card-hover animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {programmingLanguages.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </CardContent>
          </Card>

          {/* Frameworks */}
          <Card className="card-hover animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Frameworks & Libraries
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {frameworks.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-2">Also familiar with:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Express.js</Badge>
                  <Badge variant="outline">Bootstrap</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="card-hover animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                Tools & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="bg-primary/10 text-primary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="card-hover animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Languages */}
        <Card className="card-hover animate-slide-up mt-8" style={{ animationDelay: "0.4s" }}>
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary" className="bg-success/10 text-success">
              English (Fluent)
            </Badge>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;