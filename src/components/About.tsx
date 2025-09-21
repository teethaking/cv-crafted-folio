import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award, Heart } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      period: "Jan 2023 – Present",
      location: "Kaduna, Nigeria",
      description: "Built websites for local businesses and community organizations. Conducted client meetings and delivered customized solutions."
    },
    {
      title: "Summer Coding Intern",
      company: "TechTrend Innovations",
      period: "June 2024 – August 2024",
      location: "Kaduna, Nigeria",
      description: "Assisted in developing and testing web applications. Contributed to code reviews and collaborated with senior developers."
    }
  ];

  const certifications = [
    "Java SE 8 Programmer I, Oracle (2024)",
    "Python for Everybody, Coursera (2023)",
    "Responsive Web Design, freeCodeCamp (2023)"
  ];

  const interests = [
    "Competitive Programming",
    "Open Source Contributions",
    "Gaming & Game Development",
    "Robotics",
    "Mathematics"
  ];

  return (
    <section className="min-h-screen section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm an enthusiastic and passionate young coder currently studying at Karji High School. 
            With a strong foundation in programming and hands-on experience through internships and freelance work, 
            I'm eager to contribute to innovative software projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="card-hover animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Karji High School</h4>
                  <p className="text-muted-foreground">Expected Graduation: June 2026</p>
                  <p className="text-muted-foreground">Kaduna, Nigeria</p>
                  <div className="mt-2">
                    <Badge variant="secondary" className="mr-2">GPA: 3.8/4.0</Badge>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-muted-foreground mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Computer Science", "Mathematics", "Physics"].map((course) => (
                        <Badge key={course} variant="outline">{course}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-muted-foreground mb-2">Extracurriculars:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Coding Club", "Robotics Team", "Math Club"].map((activity) => (
                        <Badge key={activity} variant="outline">{activity}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="card-hover animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index}>
                    <h4 className="font-semibold">{exp.title}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period} • {exp.location}</p>
                    <p className="text-sm mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="card-hover animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card className="card-hover animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Interests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;